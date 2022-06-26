import { Box, Pagination as PaginationMUI } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { styles } from './styles';

interface PaginationProps {
  count: number
  page: number
  onChange: (_event: ChangeEvent<unknown>, page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ count, page, onChange }) => (
  <Box sx={styles.container}>
    <PaginationMUI
      count={count}
      page={page}
      showFirstButton
      showLastButton
      onChange={onChange}
      color="secondary"
    />
  </Box>
);
