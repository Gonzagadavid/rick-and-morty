import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.spacing(45),
      display: 'none',

    },
  }),
  text: (theme: Theme) => ({
    fontSize: theme.spacing(55),
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.spacing(45),

    },
  }),
  image: (theme: Theme) => ({
    width: theme.spacing(325),
    height: theme.spacing(325),
    [theme.breakpoints.down('xl')]: {
      width: theme.spacing(200),
      height: theme.spacing(200),

    },
  }),
};
