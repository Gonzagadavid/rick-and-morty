import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: (theme: Theme) => theme.spacing(10),
    left: (theme: Theme) => theme.spacing(50),
  },
  text: {
    color: (theme: Theme) => theme.palette.text.primary,
    fontSize: '1.6rem',
  },
  menu: {
    height: (theme: Theme) => theme.spacing([15]),
    width: (theme: Theme) => theme.spacing([15]),
    fontSize: (theme: Theme) => theme.spacing([15]),
  },
  icon: {
    fontSize: (theme: Theme) => theme.spacing([20]),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};
