import { Theme } from '@mui/material';

export const styles = ({
  container: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'row',
    height: '15vh',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing([0, 10]),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing([0, 5]),
    },
  }),
  logo: (theme: Theme) => ({
    width: theme.spacing([95]),
    height: theme.spacing([30]),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing([55]),
      height: theme.spacing([15]),

    },
  }),
  menu: {
    height: (theme: Theme) => theme.spacing([15]),
    width: (theme: Theme) => theme.spacing([15]),
    fontSize: (theme: Theme) => theme.spacing([15]),
  },
  icon: {
    fontSize: (theme: Theme) => theme.spacing([10]),
    color: (theme: Theme) => `${theme.palette.secondary.main}`,
  },
});
