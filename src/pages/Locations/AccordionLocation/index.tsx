import {
  Avatar, Box, Typography,
} from '@mui/material';
import {
  Dispatch, FC, memo, SetStateAction, useMemo,
} from 'react';

import { UNKNOW } from 'constants/strings';
import { Accordion } from 'components/Accordion';
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
  dimension: string;
  residents: CharacterResident[];
  isExpand: Set<number>
  setIsExpand: Dispatch<SetStateAction<Set<number>>>
  isOdd: boolean
}

const AccordionLocationComponent: FC<AccordionLocationProps> = ({
  id, name, type, dimension, residents, isExpand, setIsExpand, isOdd,
}) => {
  const residentsContainer = useMemo(() => (
    <Box sx={styles.charContainer}>
      {residents.map((character) => (
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
        {`Type: ${type || UNKNOW}`}
      </Typography>
      <Typography sx={styles.accordionText}>
        {`Dimension: ${dimension || UNKNOW}`}
      </Typography>
      {residentsContainer}
    </Accordion>
  );
};

export const AccordionLocation = memo(AccordionLocationComponent);
