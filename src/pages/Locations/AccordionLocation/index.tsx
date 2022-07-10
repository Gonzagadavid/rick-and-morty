import {
  Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography,
} from '@mui/material';
import {
  Dispatch,
  FC, SetStateAction, SyntheticEvent, useCallback, useMemo,
} from 'react';

import rickIcon from 'images/rick_88915.svg';
import mortyIcon from 'images/morty_88916.svg';
import { styles } from '../styles';

interface CharacterResident {
  id: number;
  name: string;
  image: string;
}

interface AccordionLocationProps {
  id: number;
  name: string;
  type: string;
  dimesion: string;
  residents: CharacterResident[];
  isExpand: Set<number>
  setIsExpand: Dispatch<SetStateAction<Set<number>>>
  isOdd: boolean
}

const Icon: FC<{isOdd: boolean}> = ({ isOdd }) => (
  isOdd ? <Avatar sx={styles.icon} src={rickIcon} />
    : <Avatar sx={styles.icon} src={mortyIcon} />);

export const AccordionLocation: FC<AccordionLocationProps> = ({
  id, name, type, dimesion, residents, isExpand, setIsExpand, isOdd,
}) => {
  const handleExpand = useCallback((
    _event: SyntheticEvent<Element, Event>,
    expanded: boolean,
  ) => {
    setIsExpand((prev) => {
      const newExpand = new Set(prev);
      if (expanded) {
        newExpand.add(id);
        return newExpand;
      }
      newExpand.delete(id);
      return newExpand;
    });
  }, [setIsExpand]);

  const residentsContainer = useMemo(() => (
    <Box sx={styles.charContainer}>
      {residents.map((character) => (
        <Avatar sx={styles.charAvatar} key={character.id} src={character.image} />
      ))}
    </Box>
  ), []);

  return (
    <Accordion
      key={id}
      sx={styles.accordionContainer}
      expanded={isExpand.has(id)}
      onChange={handleExpand}
    >
      <AccordionSummary
        expandIcon={<Icon isOdd={isOdd} />}
      >
        <Typography sx={styles.accordionTitle}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={styles.accordionText}>
          {`Type: ${type || 'unknown'}`}
        </Typography>
        <Typography sx={styles.accordionText}>
          {`Dimension: ${dimesion || 'unknown'}`}
        </Typography>
        {residentsContainer}
      </AccordionDetails>
    </Accordion>
  );
};
