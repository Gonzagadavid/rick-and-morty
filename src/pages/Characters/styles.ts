import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    background: 'blue',
    width: (theme: Theme) => theme.percent(16),
  },
};
