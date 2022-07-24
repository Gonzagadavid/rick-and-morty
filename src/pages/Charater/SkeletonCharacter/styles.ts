import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    width: '70vw',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: (theme: Theme) => theme.spacing(25),
  },
  title: {
    fontFamily: (theme: Theme) => theme.typography.h2,
    color: (theme: Theme) => theme.palette.primary.main,
    marginTop: (theme: Theme) => theme.spacing(45),
    textAlign: 'center',
  },
  image: {
    width: (theme: Theme) => theme.spacing([110]),
    height: (theme: Theme) => theme.spacing([140]),
  },
  infoPaper: {
    width: (theme: Theme) => theme.spacing([150]),
    height: (theme: Theme) => theme.spacing([25]),
    padding: (theme: Theme) => theme.spacing([1, 10]),

  },
  infoText: {
    fontSize: '2.1rem',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: (theme: Theme) => theme.spacing([150]),
  },
  chipContainer: {
    display: 'flex',
    width: (theme: Theme) => theme.spacing([165]),
    height: (theme: Theme) => theme.spacing([15]),
    flexWrap: 'no-wrap',
    overflowX: 'auto',
    padding: (theme: Theme) => theme.spacing([2, 2, 0]),
    '::-webkit-scrollbar': {
      background: 'transparent',
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
    },
    '::-webkit-scrollbar-thumb': {
      background: (theme: Theme) => theme.palette.primary.main,
    },
  },
  chip: {
    margin: (theme: Theme) => theme.spacing([0, 1]),
    width: (theme: Theme) => theme.spacing([16]),
  },
};
