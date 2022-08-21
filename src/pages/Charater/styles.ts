import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Theme) => ({
    display: 'flex',
    width: '75vw',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: theme.spacing([7, 0, 2]),
    [theme.breakpoints.down('xl')]: {
      width: '100vw',
      justifyContent: 'space-beteween',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
  title: {
    fontFamily: (theme: Theme) => theme.typography.h2,
    color: (theme: Theme) => theme.palette.primary.main,
    marginTop: (theme: Theme) => theme.spacing(45),
    textAlign: 'center',
  },
  image: (theme: Theme) => ({
    width: theme.spacing([110]),
    height: theme.spacing([140]),
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing([100]),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing([70]),
      height: theme.spacing([100]),
    },
  }),
  infoPaper: (theme: Theme) => ({
    width: theme.spacing([150]),
    height: theme.spacing([15]),
    padding: theme.spacing([1, 10]),
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing([100]),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing([70]),
    },
  }),
  infoText: (theme: Theme) => ({
    fontSize: '2.1rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem',
    },
  }),
  infoContainer: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: theme.spacing([150]),
  }),
  chipContainer: (theme: Theme) => ({
    display: 'flex',
    width: theme.spacing([165]),
    height: theme.spacing([15]),
    flexWrap: 'no-wrap',
    overflowX: 'auto',
    padding: theme.spacing([2, 2, 0]),
    '::-webkit-scrollbar': {
      background: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing([100]),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing([80]),
    },
  }),
  chip: {
    margin: (theme: Theme) => theme.spacing([0, 1]),
    fontSize: '1.1rem',
  },
  chipSkeleton: {
    margin: (theme: Theme) => theme.spacing([0, 1]),
    width: (theme: Theme) => theme.spacing([16]),
  },
};
