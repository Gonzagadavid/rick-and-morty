import { Theme } from '@mui/material';

export const styles = {
  container: {
    width: (theme: Theme) => theme.spacing([70]),
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: (theme: Theme) => theme.spacing([30]),
  },
  text: {
    fontFamily: (theme: Theme) => theme.typography.h4,
    color: (theme: Theme) => theme.palette.text.primary,
    position: 'absolute',
    left: 0,
    top: (theme: Theme) => theme.percent(10),
    zIndex: 2,
    textShadow: (theme: Theme) => `0px 0px 5px ${theme.palette.background.paper}`,
  },
  avatar: {
    width: (theme: Theme) => theme.spacing([60]),
    height: (theme: Theme) => theme.spacing([100]),
    filter: (theme: Theme) => `drop-shadow(0px 0px 10px ${theme.image});`,
  },
};
