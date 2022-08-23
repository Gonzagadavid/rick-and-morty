import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: (theme: Theme) => theme.percent(25),
    height: (theme: Theme) => theme.percent(25),
    margin: (theme: Theme) => `${theme.spacing(80)} auto 0`,
    flexWrap: 'wrap',
  },
};
