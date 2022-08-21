import { Theme } from '@mui/material';

export const styles = {
  accordionContainer: (theme: Theme) => ({
    width: (theme: Theme) => theme.percent(15),
    margin: (theme: Theme) => theme.spacing([5]),
    padding: (theme: Theme) => theme.spacing([4]),
    borderRadius: (theme: Theme) => theme.spacing([1]),
    [theme.breakpoints.down('md')]: {
      width: (theme: Theme) => theme.percent(17),
      padding: (theme: Theme) => theme.spacing([3]),
    },
    [theme.breakpoints.down('sm')]: {
      width: (theme: Theme) => theme.percent(19),
      padding: (theme: Theme) => theme.spacing([2]),
    },
  }),
  accordionTitle: (theme: Theme) => ({
    fontSize: theme.spacing([2]),
    textAlign: 'center',
    fontFamily: theme.typography.h3,
    width: theme.percent(25),
    [theme.breakpoints.down('md')]: {
      fontFamily: theme.typography.h5,
    },
    [theme.breakpoints.down('sm')]: {
      fontFamily: theme.typography.h6,
    },
  }),
  accordionText: {
    fontSize: (theme: Theme) => theme.spacing([2]),
    fontFamily: (theme: Theme) => theme.typography.h5,
    margin: (theme: Theme) => theme.spacing([5]),
    width: (theme: Theme) => theme.percent(25),

  },
  icon: (theme: Theme) => ({
    width: theme.spacing(80),
    height: theme.spacing(80),
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(60),
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  }),
  skeleton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  skeletonText: (theme: Theme) => ({
    width: theme.spacing(900),
    height: theme.spacing(80),
    [theme.breakpoints.down('xl')]: {
      width: theme.spacing(680),
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.spacing(500),
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(350),
      height: theme.spacing(50),
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(200),
      height: theme.spacing(50),
    },
  }),
};
