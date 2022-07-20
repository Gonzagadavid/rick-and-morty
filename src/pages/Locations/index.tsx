import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import {
  FC, useCallback, useMemo, useRef, useState, ChangeEvent,
} from 'react';
import { LOCATIONS, LocationType } from 'services/graphql/getLocations';
import { EMPTY } from 'constants/strings';
import { Pagination } from 'components/Pagination';
import {
  ONE, TWENTY, TWO, ZERO,
} from 'constants/numbers';
import { SearchBar } from 'components/SearchBar';
import { useLoading } from 'hooks/useLoading';
import { ErrorMesage } from 'components/ErrorMessage';
import { NotFound } from 'components/NotFound';
import { styles } from './styles';
import { AccordionLocation } from './AccordionLocation';
import { SkeletonAccordion } from '../../components/Accordion/SkeletonAccordion';

const INITIAL_FILTER = {
  name: EMPTY,
};

const Locations:FC = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isExpand, setIsExpand] = useState<Set<number>>(new Set([]));

  const {
    data: dataResult, loading, error,
  } = useQuery(LOCATIONS, { variables: { page, filter } });
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
    data && data?.locations?.results.length
      ? data.locations.results.map(({
        name, id, residents, dimension, type,
      }: LocationType, index: number) => (
        <AccordionLocation
          key={id}
          name={name}
          id={id}
          residents={residents}
          dimension={dimension}
          type={type}
          isExpand={isExpand}
          setIsExpand={setIsExpand}
          isOdd={index % TWO !== ZERO}
        />
      )) : <NotFound />
  ), [data, isExpand, setIsExpand]);

  const skeletons = useMemo(() => Array(TWENTY)
    .fill(EMPTY).map((_, index) => (<SkeletonAccordion key={`${index + ONE}`} />)), []);

  useLoading(loading);

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {error && <ErrorMesage />}
      {loading ? skeletons : locations}
      <Pagination
        count={data?.locations?.info?.pages}
        page={page}
        onChange={handlePage}
      />
    </Box>

  );
};

export default Locations;
