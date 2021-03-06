import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '15vh',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: (theme: Theme) => theme.spacing([0, 10]),
  },
  logo: {
    width: (theme: Theme) => theme.spacing([95]),
    height: (theme: Theme) => theme.spacing([30]),
  },
  menu: {
    height: (theme: Theme) => theme.spacing([15]),
    width: (theme: Theme) => theme.spacing([15]),
    fontSize: (theme: Theme) => theme.spacing([15]),
  },
  icon: {
    fontSize: (theme: Theme) => theme.spacing([10]),
    color: (theme: Theme) => `${theme.palette.secondary.main}`,
  },
};
