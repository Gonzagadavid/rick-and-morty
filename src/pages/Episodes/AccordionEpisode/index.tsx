import {
  Avatar, Box, Typography,
} from '@mui/material';
import {
  Dispatch, FC, memo, SetStateAction, useMemo,
} from 'react';

import { UNKNOW } from 'constants/strings';
import { Accordion } from 'components/Accordion';
import { EpisodesType } from 'services/graphql/getEpisodes';
import { dateFormat } from 'utils/dateFormat';
import { styles } from '../styles';

interface AccordionEpisodeProps {
  id: number;
  episode: EpisodesType
  isExpand: Set<number>
  setIsExpand: Dispatch<SetStateAction<Set<number>>>
  isOdd: boolean
}

const AccordionEpisodeComponent: FC<AccordionEpisodeProps> = ({
  id, episode, isExpand, setIsExpand, isOdd,
}) => {
  const {
    air_date: airDate, created, characters, name,
  } = episode;
  const charactersContainer = useMemo(() => (
    <Box sx={styles.charContainer}>
      {characters.map((character) => (
        <Avatar sx={styles.charAvatar} key={character.id} src={character.image} />
      ))}
    </Box>
  ), []);

  return (
    <Accordion
      id={id}
      isExpand={isExpand}
      isOdd={isOdd}
      setIsExpand={setIsExpand}
      title={name}
    >
      <Typography sx={styles.accordionText}>
        {`Created: ${dateFormat(airDate) || UNKNOW}`}
      </Typography>
      <Typography sx={styles.accordionText}>
        {`Air Date: ${dateFormat(created) || UNKNOW}`}
      </Typography>
      {charactersContainer}
    </Accordion>
  );
};

export const AccordionEpisode = memo(AccordionEpisodeComponent);
