import { Theme } from '@mui/material';

export const styles = {
  container: {
    height: (theme: Theme) => theme.percent(25),
    background: (theme: Theme) => theme.palette.background.default,
    paddingTop: (theme: Theme) => theme.percent(2.6),

  },
  content: {
    // background: 'red',
  },
};
