import {
  Dispatch, FC, ReactNode, SetStateAction, SyntheticEvent, useCallback,
} from 'react';
import {
  Accordion as MUIAccordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import { styles } from './styles';
import { Icon } from './Icon';

interface AccordionProps {
  children: ReactNode;
  id: string;
  isExpand: Set<string>;
  isOdd: boolean;
  setIsExpand: Dispatch<SetStateAction<Set<string>>>
  title: string
}

export const Accordion: FC<AccordionProps> = ({
  children, id, isExpand, setIsExpand, isOdd, title,
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

  return (
    <MUIAccordion
      key={id}
      sx={styles.accordionContainer}
      expanded={isExpand.has(id)}
      onChange={handleExpand}
    >
      <AccordionSummary
        expandIcon={<Icon isOdd={isOdd} />}
      >
        <Typography sx={styles.accordionTitle}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};
