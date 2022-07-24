import {
  Avatar, Box, Typography,
} from '@mui/material';
import {
  Dispatch, FC, memo, SetStateAction, useMemo,
} from 'react';

import { EMPTY, UNKNOW } from 'constants/strings';
import { Accordion } from 'components/Accordion';
import { Character } from 'generated/graphql';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

interface AccordionLocationProps {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents?: (Partial<Character | null>)[],
  isExpand: Set<string>
  setIsExpand: Dispatch<SetStateAction<Set<string>>>
  isOdd: boolean
}

const AccordionLocationComponent: FC<AccordionLocationProps> = ({
  id, name, type, dimension, residents = [], isExpand, setIsExpand, isOdd,
}) => {
  const residentsContainer = useMemo(() => (
    <Box sx={styles.charContainer}>
      {residents.map((character) => (
        <Link to={`/character/${character?.id}`} key={character?.id}>
          <Avatar
            sx={styles.charAvatar}
            key={character?.id ?? EMPTY}
            src={character?.image ?? EMPTY}
          />
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
