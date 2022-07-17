import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import { EMPTY } from 'constants/strings';
import { CHARATERS, CharacterType } from 'services/graphql/getCharacters';

import {
  ChangeEvent, FC, useCallback, useMemo, useRef, useState,
} from 'react';
import { ONE, TWENTY } from 'constants/numbers';
import { SkeletonCard } from 'components/Card/SkeletonCard';
import { ErrorMesage } from 'components/ErrorMessage';
import { styles } from './styles';

const INITIAL_FILTER = {
  name: EMPTY,
};

export const Characters:FC = () => {
  const [page, setPageNumber] = useState(ONE);
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

  const skeletons = useMemo(
    () => Array(TWENTY)
      .fill(EMPTY).map((_, index) => (<SkeletonCard key={`${index + ONE}`} />)),
    [],
  );

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {error && <ErrorMesage />}
      <Box sx={styles.cardContainer}>{loading ? skeletons : cards }</Box>
      <Pagination
        count={data?.characters?.info?.pages}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default Characters;
