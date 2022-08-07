import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: (theme: Theme) => theme.palette.secondary.main,
  },
};
