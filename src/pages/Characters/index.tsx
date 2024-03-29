import { Box } from '@mui/material';
import { CardComponent } from 'components/Card';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import { EMPTY } from 'constants/strings';

import {
  ChangeEvent, FC, useCallback, useMemo, useRef, useState,
} from 'react';
import { ONE, TWENTY } from 'constants/numbers';
import { SkeletonCard } from 'components/Card/SkeletonCard';
import { ErrorMesage } from 'components/ErrorMessage';
import { NotFound } from 'components/NotFound';
import { useChatactersQuery } from 'generated/graphql';
import { Link } from 'react-router-dom';
import { styles } from './styles';

const INITIAL_FILTER = {
  name: EMPTY,
};

const skeletons = Array(TWENTY)
  .fill(EMPTY).map((_, index) => (<SkeletonCard key={`${index + ONE}`} />));

export const CharactersPage:FC = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const {
    data: dataResult, loading, error,
  } = useChatactersQuery({ variables: { page, filter } });
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
    data && data.characters && data.characters.results?.length
      ? data.characters.results.map((character) => (
        <Link to={`/character/${character?.id}`} key={character?.id}>
          <CardComponent name={character?.name ?? ''} image={character?.image ?? ''} />
        </Link>
      )) : <NotFound />
  ), [data]);

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {error && <ErrorMesage />}
      <Box sx={styles.cardContainer}>{loading ? skeletons : cards }</Box>
      <Pagination
        count={data?.characters?.info?.pages ?? ONE}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default CharactersPage;
