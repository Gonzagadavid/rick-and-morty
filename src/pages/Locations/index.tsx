import { Box } from '@mui/material';
import {
  FC, useCallback, useMemo, useRef, useState, ChangeEvent,
} from 'react';
import { EMPTY } from 'constants/strings';
import { Pagination } from 'components/Pagination';
import {
  ONE, TWENTY, TWO, ZERO,
} from 'constants/numbers';
import { SearchBar } from 'components/SearchBar';
import { ErrorMesage } from 'components/ErrorMessage';
import { NotFound } from 'components/NotFound';
import { useLocationQuery } from 'generated/graphql';
import { styles } from './styles';
import { AccordionLocation } from './AccordionLocation';
import { SkeletonAccordion } from '../../components/Accordion/SkeletonAccordion';

const INITIAL_FILTER = {
  name: EMPTY,
};

const Locations:FC = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isExpand, setIsExpand] = useState<Set<string>>(new Set([]));

  const {
    data: dataResult, loading, error,
  } = useLocationQuery({ variables: { page, filter } });
  const dataRef = useRef(dataResult);
  const data = useMemo(() => {
    if (!loading) {
      dataRef.current = dataResult;
    }
    return dataRef.current;
  }, [dataResult]);

  const handlePage = useCallback((_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  }, [setPageNumber]);

  const handleFilter = useCallback((name: string) => {
    setFilter({ name });
  }, [setFilter]);

  const locations = useMemo(() => (
    data && data?.locations && data.locations.results?.length
      ? data.locations.results.map((location, index: number) => (
        <AccordionLocation
          key={location?.id}
          name={location?.name ?? EMPTY}
          id={location?.id ?? EMPTY}
          residents={location?.residents}
          dimension={location?.dimension ?? EMPTY}
          type={location?.dimension ?? EMPTY}
          isExpand={isExpand}
          setIsExpand={setIsExpand}
          isOdd={index % TWO !== ZERO}
        />
      )) : <NotFound />
  ), [data, isExpand, setIsExpand]);

  const skeletons = useMemo(() => Array(TWENTY)
    .fill(EMPTY).map((_, index) => (<SkeletonAccordion key={`${index + ONE}`} />)), []);

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {error && <ErrorMesage />}
      {loading ? skeletons : locations}
      <Pagination
        count={data?.locations?.info?.pages ?? ONE}
        page={page}
        onChange={handlePage}
      />
    </Box>

  );
};

export default Locations;
