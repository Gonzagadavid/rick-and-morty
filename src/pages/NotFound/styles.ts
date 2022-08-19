import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-around',

    height: (theme: Theme) => theme.spacing([55]),
    width: (theme: Theme) => theme.spacing([170]),
    marginTop: (theme: Theme) => theme.spacing([15]),
  },
};
