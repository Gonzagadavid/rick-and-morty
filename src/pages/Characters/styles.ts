import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: (theme: Theme) => theme.percent(25),
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: (theme: Theme) => theme.spacing([20]),
    width: (theme: Theme) => theme.percent(24),
  },
};
