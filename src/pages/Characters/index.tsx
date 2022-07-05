import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import { EMPTY } from 'constants/strings';
import { CHARATERS } from 'graphql/getCharacters';
import { useLoading } from 'hooks/useLoading';

import {
  ChangeEvent, FC, useCallback, useMemo, useRef, useState,
} from 'react';
import { styles } from './styles';

interface CharacterType {
  name: string, image: string, id:number
}

const INITIAL_FILTER = {
  name: EMPTY,
};

export const Characters:FC = () => {
  const [page, setPageNumber] = useState(1);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const {
    data: dataResult, loading, error,
  } = useQuery(CHARATERS, { variables: { page, filter } });
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

  const cards = useMemo(() => (
    data ? data?.characters?.results.map(({ name, image, id }: CharacterType) => (
      <CardComponent name={name} image={image} key={id} />
    )) : null
  ), [data]);

  useLoading(loading);
  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      <Box sx={styles.cardContainer}>{cards}</Box>
      <Pagination
        count={data?.characters?.info?.pages}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default Characters;
