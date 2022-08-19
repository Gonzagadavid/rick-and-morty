import { Box } from '@mui/material';
import { NotFound } from 'components/NotFound';
import { styles } from './styles';

export const NotFoundPage = () => (
  <Box sx={styles.container}>
    <NotFound />
  </Box>
);
