import { Theme } from '@mui/material';

export const styles = {
  accordionContainer: {
    width: (theme: Theme) => theme.percent(15),
    margin: (theme: Theme) => theme.spacing([5]),
    padding: (theme: Theme) => theme.spacing([4]),
    borderRadius: (theme: Theme) => theme.spacing([1]),
  },
  accordionTitle: {
    fontSize: (theme: Theme) => theme.spacing([2]),
    textAlign: 'center',
    fontFamily: (theme: Theme) => theme.typography.h3,
    width: (theme: Theme) => theme.percent(25),

  },
  accordionText: {
    fontSize: (theme: Theme) => theme.spacing([2]),
    fontFamily: (theme: Theme) => theme.typography.h5,
    margin: (theme: Theme) => theme.spacing([5]),
    width: (theme: Theme) => theme.percent(25),

  },
  icon: {
    width: (theme: Theme) => theme.spacing(80),
    height: (theme: Theme) => theme.spacing(80),
  },
  skeleton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};
