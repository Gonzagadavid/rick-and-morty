import { Theme } from '@mui/material';

export const styles = {
  container: {
    background: (theme: Theme) => theme.palette.background.default,
    paddingTop: '16vh',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    minHeight: '84vh',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
};
