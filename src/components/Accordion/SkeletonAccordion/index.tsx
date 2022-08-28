import { Accordion, Skeleton, Box } from '@mui/material';
import { FIFTY } from 'constants/numbers';
import { FC } from 'react';
import { styles } from '../styles';

export const SkeletonAccordion:FC = () => (
  <Accordion sx={styles.accordionContainer}>
    <Box sx={styles.skeleton}>
      <Skeleton variant="text" sx={styles.skeletonText} />
      <Skeleton variant="circular" width={FIFTY} height={FIFTY} />
    </Box>
  </Accordion>
);
