import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-around',
    height: (theme: Theme) => theme.spacing([55]),
    width: (theme: Theme) => theme.spacing([170]),
  },
  icon: {
    height: (theme: Theme) => theme.spacing([49]),
    width: (theme: Theme) => theme.spacing([62]),
  },
  text: {
    fontFamily: (theme: Theme) => theme.typography.h2,
    color: (theme: Theme) => theme.palette.text.primary,
  },
};
