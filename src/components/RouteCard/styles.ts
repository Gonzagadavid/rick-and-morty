import { Theme } from '@mui/material';

export const styles = {
  container: {
    width: (theme: Theme) => theme.spacing([70]),
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: (theme: Theme) => theme.spacing([10]),
  },
  text: {
    fontFamily: (theme: Theme) => theme.typography.h4,
    color: (theme: Theme) => theme.palette.text.primary,
    position: 'absolute',
    left: 0,
    top: (theme: Theme) => theme.percent(10),
    textAlign: 'center',
    width: '100%',
    zIndex: 2,
    textShadow: (theme: Theme) => `${theme.spacing([0, 0, 1.25])}${theme.palette.background.paper}`,
  },
  avatar: {
    width: (theme: Theme) => theme.spacing([60]),
    height: (theme: Theme) => theme.spacing([100]),
    filter: (theme: Theme) => `drop-shadow(${theme.spacing([0, 0, 2.5])} ${theme.image});`,
  },
};
