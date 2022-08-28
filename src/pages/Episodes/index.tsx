import { Box } from '@mui/material';
import { SkeletonAccordion } from 'components/Accordion/SkeletonAccordion';
import { ErrorMesage } from 'components/ErrorMessage';
import { NotFound } from 'components/NotFound';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import {
  ONE, TWENTY, TWO, ZERO,
} from 'constants/numbers';
import { EMPTY } from 'constants/strings';
import { useEpisodesQuery } from 'generated/graphql';

import {
  ChangeEvent, useCallback, useMemo, useRef, useState,
} from 'react';
import { AccordionEpisode } from './AccordionEpisode';
import { styles } from './styles';

const INITIAL_FILTER = {
  name: EMPTY,
};

const skeletons = Array(TWENTY)
  .fill(EMPTY).map((_, index) => (<SkeletonAccordion key={`${index + ONE}`} />));

const Episodes = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isExpand, setIsExpand] = useState<Set<string>>(new Set([]));

  const {
    data: dataResult, loading, error,
  } = useEpisodesQuery({ variables: { page, filter } });
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

  const episodes = useMemo(() => (
    data && data.episodes && data.episodes.results?.length
      ? data.episodes.results.map((episode, index: number) => (
        <AccordionEpisode
          key={episode?.id}
          id={episode?.id ?? EMPTY}
          name={episode?.name ?? EMPTY}
          airDate={episode?.air_date ?? EMPTY}
          created={episode?.created ?? EMPTY}
          characters={episode?.characters}
          isExpand={isExpand}
          setIsExpand={setIsExpand}
          isOdd={index % TWO !== ZERO}
        />
      )) : <NotFound />
  ), [data, isExpand, setIsExpand]);

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {error && <ErrorMesage />}
      {loading ? skeletons : episodes}
      <Pagination
        count={data?.episodes?.info?.pages ?? ONE}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default Episodes;
