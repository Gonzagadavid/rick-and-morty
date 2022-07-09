import { useQuery } from '@apollo/client';
import {
  Accordion, AccordionDetails, Box, Typography,
} from '@mui/material';
import {
  FC, useCallback, useMemo, useRef, useState, ChangeEvent,
} from 'react';
import { LOCATIONS, LocationType } from 'services/graphql/getLocations';
import { EMPTY } from 'constants/strings';
import { Pagination } from 'components/Pagination';
import { ONE } from 'constants/numbers';
import { SearchBar } from 'components/SearchBar';
import { useLoading } from 'hooks/useLoading';
import { styles } from './styles';

const INITIAL_FILTER = {
  name: EMPTY,
};

const Locations:FC = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);

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
  if (error) return <p>error</p>;

  const handlePage = useCallback((_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  }, [setPageNumber]);

  const handleFilter = useCallback((name: string) => {
    setFilter({ name });
  }, [setFilter]);

  const locations = useMemo(() => (
    data ? data.locations.results.map((location: LocationType) => (
      <Accordion key={location.id} sx={styles.accordionContainer}>
        <AccordionDetails>
          <Typography sx={styles.accordionTitle}>{location.name}</Typography>
        </AccordionDetails>
      </Accordion>
    )) : null
  ), [data]);

  useLoading(loading);

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {locations}
      <Pagination
        count={data?.locations?.info?.pages}
        page={page}
        onChange={handlePage}
      />
    </Box>

  );
};

export default Locations;
