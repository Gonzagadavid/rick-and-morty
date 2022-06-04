import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: (theme: Theme) => theme.percent(3.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: (theme: Theme) => theme.spacing([95]),
    height: (theme: Theme) => theme.spacing([30]),
  },
  menu: {
    height: (theme: Theme) => theme.spacing([15]),
    width: (theme: Theme) => theme.spacing([15]),
    fontSize: (theme: Theme) => theme.spacing([15]),
    position: 'absolute',
    left: (theme: Theme) => theme.spacing([8]),
  },
  icon: {
    fontSize: (theme: Theme) => theme.spacing([10]),
    color: (theme: Theme) => `${theme.palette.secondary.main}`,
  },
};
