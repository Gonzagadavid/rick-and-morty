import { Theme } from '@mui/material';

export const styles = {
  container: {
    width: (theme: Theme) => theme.percent(25),
    height: (theme: Theme) => theme.percent(25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
  },
};
