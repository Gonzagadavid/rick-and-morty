import { Accordion, Skeleton, Box } from '@mui/material';
import { FC } from 'react';
import { styles } from '../styles';

export const SkeletonAccordion:FC = () => (
  <Accordion sx={styles.accordionContainer}>
    <Box sx={styles.skeleton}>
      <Skeleton variant="text" width={1000} height={80} />
      <Skeleton variant="circular" width={50} height={50} />
    </Box>
  </Accordion>
);
