import { Theme } from '@mui/material';

export const styles = {
  card: {
    background: (theme: Theme) => theme.palette.background.paper,
    width: (theme: Theme) => theme.spacing([70]),
    height: (theme: Theme) => theme.spacing([110]),
    margin: (theme: Theme) => theme.spacing([4]),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: (theme: Theme) => theme.percent(20),
    height: (theme: Theme) => theme.percent(20),
  },
  name: {
    fontFamily: (theme: Theme) => theme.typography.fontFamily,
    fontSize: (theme: Theme) => theme.spacing([6]),
  },
  skeletonText: {
    width: (theme: Theme) => theme.percent(220),
    height: (theme: Theme) => theme.percent(40),
  },
};
