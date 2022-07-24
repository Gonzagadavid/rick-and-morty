import {
  Avatar, Box, Typography,
} from '@mui/material';
import {
  Dispatch, FC, memo, SetStateAction, useMemo,
} from 'react';

import { UNKNOW } from 'constants/strings';
import { Accordion } from 'components/Accordion';
import { dateFormat } from 'utils/dateFormat';
import { Character } from 'generated/graphql';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

interface AccordionEpisodeProps {
  id: string;
  isExpand: Set<string>
  setIsExpand: Dispatch<SetStateAction<Set<string>>>
  isOdd: boolean
  airDate: string,
  created: string,
  characters?: (Partial<Character | null>)[],
  name: string,
}

const AccordionEpisodeComponent: FC<AccordionEpisodeProps> = ({
  id, isExpand, setIsExpand, isOdd, airDate, created, characters = [], name,
}) => {
  const charactersContainer = useMemo(() => (
    <Box sx={styles.charContainer}>
      {characters && characters.map((character) => (
        <Link to={`/character/${character?.id}`} key={character?.id}>
          <Avatar sx={styles.charAvatar} key={character?.id} src={character?.image ?? ''} />
        </Link>
      ))}
    </Box>
  ), []);

  return (
    <Accordion
      id={id}
      isExpand={isExpand}
      isOdd={isOdd}
      setIsExpand={setIsExpand}
      title={name ?? ''}
    >
      <Typography sx={styles.accordionText}>
        {`Created: ${dateFormat(airDate ?? '') || UNKNOW}`}
      </Typography>
      <Typography sx={styles.accordionText}>
        {`Air Date: ${dateFormat(created ?? '') || UNKNOW}`}
      </Typography>
      {charactersContainer}
    </Accordion>
  );
};

export const AccordionEpisode = memo(AccordionEpisodeComponent);
