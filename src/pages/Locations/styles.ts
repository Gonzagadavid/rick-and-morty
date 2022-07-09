import { Theme } from '@mui/material';

export const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  },
};
