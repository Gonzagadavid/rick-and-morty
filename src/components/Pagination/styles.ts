import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: (theme: Theme) => theme.percent(25),
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: (theme: Theme) => theme.spacing([15]),
    background: (theme: Theme) => theme.palette.primary.main,
  },
  pagination: {
    size: 'small',
  },
};
