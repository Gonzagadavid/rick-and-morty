import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: (theme: Theme) => theme.palette.secondary.main,
  },
  text: {
    fontSize: (theme: Theme) => theme.spacing(90),
  },
  image: {
    width: (theme: Theme) => theme.spacing(325),
    height: (theme: Theme) => theme.spacing(325),
  },
};
