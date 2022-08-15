import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw',
  },
  startMessage: {
    color: 'white',
    position: 'fixed',
    fontSize: '100px',
    fontFamily: ((theme: Theme) => theme.typography.h2),
  },
};