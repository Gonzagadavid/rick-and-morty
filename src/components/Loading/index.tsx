import { CircularProgress, Box } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

export const Loading:FC = () => (
  <Box sx={styles.container}>
    <CircularProgress />
  </Box>
);
