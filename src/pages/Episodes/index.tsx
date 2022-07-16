import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { SkeletonAccordion } from 'components/Accordion/SkeletonAccordion';
import { Pagination } from 'components/Pagination';
import { SearchBar } from 'components/SearchBar';
import {
  ONE, TWENTY, TWO, ZERO,
} from 'constants/numbers';
import { EMPTY } from 'constants/strings';

import {
  ChangeEvent, useCallback, useMemo, useRef, useState,
} from 'react';
import { EPISODES, EpisodesType } from 'services/graphql/getEpisodes';
import { AccordionEpisode } from './AccordionEpisode';
import { styles } from './styles';

const INITIAL_FILTER = {
  name: EMPTY,
};

const Episodes = () => {
  const [page, setPageNumber] = useState(ONE);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isExpand, setIsExpand] = useState<Set<number>>(new Set([]));

  const {
    data: dataResult, loading, error,
  } = useQuery(EPISODES, { variables: { page, filter } });
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

  const episodes = useMemo(() => (
    data ? data.episodes.results.map((episode: EpisodesType, index: number) => (
      <AccordionEpisode
        key={episode.id}
        id={episode.id}
        episode={episode}
        isExpand={isExpand}
        setIsExpand={setIsExpand}
        isOdd={index % TWO !== ZERO}
      />
    )) : null
  ), [data, isExpand, setIsExpand]);

  const skeletons = useMemo(
    () => Array(TWENTY)
      .fill(EMPTY).map((_, index) => (<SkeletonAccordion key={`${index + ONE}`} />)),
    [],
  );

  return (
    <Box sx={styles.container}>
      <SearchBar handleFilter={handleFilter} />
      {loading ? skeletons : episodes}
      <Pagination
        count={data?.locations?.info?.pages}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default Episodes;
