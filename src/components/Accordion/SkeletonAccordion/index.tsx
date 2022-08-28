import { Accordion, Skeleton, Box } from '@mui/material';
import { FC } from 'react';
import { styles } from '../styles';

export const SkeletonAccordion:FC = () => (
  <Accordion sx={styles.accordionContainer}>
    <Box sx={styles.skeleton}>
      <Skeleton variant="text" sx={styles.skeletonText} />
      <Skeleton variant="circular" sx={styles.skeletonIcon} />
    </Box>
  </Accordion>
);
