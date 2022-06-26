import { useReactiveVar } from '@apollo/client';
import { CircularProgress, Box } from '@mui/material';
import { loadingState } from 'hooks/useLoading';
import { FC } from 'react';
import { styles } from './styles';

export const Loading:FC = () => {
  const isLoading = useReactiveVar(loadingState);
  if (!isLoading) return null;

  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};
