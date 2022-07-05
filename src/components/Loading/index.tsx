import { useReactiveVar } from '@apollo/client';
import { CircularProgress, Box } from '@mui/material';
import { loadingState } from 'hooks/useLoading';
import { FC } from 'react';
import { styles } from './styles';

interface LoadingProps {
  paged?: boolean
}
export const Loading:FC<LoadingProps> = ({ paged }) => {
  const isLoading = useReactiveVar(loadingState);

  return (
    isLoading || paged ? (
      <Box sx={styles.container}>
        <CircularProgress />
      </Box>
    ) : null
  );
};
