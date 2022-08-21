import { Theme } from '@mui/material';

export const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: (theme: Theme) => theme.spacing([20]),

  },
  accordionText: (theme: Theme) => ({
    fontSize: theme.spacing([2]),
    fontFamily: theme.typography.h5,
    margin: theme.spacing([5]),
    width: theme.percent(25),
    textTransform: 'capitalize',
    wordSpacing: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontFamily: theme.typography.h6,
      width: theme.percent(23),
    },
  }),
  charContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justinfyContent: 'space-around',
    marginTop: (theme: Theme) => theme.spacing(20),

  },
  charAvatar: {
    margin: (theme: Theme) => theme.spacing(15),
    width: (theme: Theme) => theme.spacing(80),
    height: (theme: Theme) => theme.spacing(80),
  },
  icon: {
    width: (theme: Theme) => theme.spacing(80),
    height: (theme: Theme) => theme.spacing(80),
  },
};
