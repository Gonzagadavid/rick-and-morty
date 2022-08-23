import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'fixed',
    top: ((theme: Theme) => theme.spacing(115)),
  },
  startMessage: {
    color: ((theme: Theme) => theme.palette.secondary.main),
    fontSize: ((theme: Theme) => theme.spacing(25)),
    fontFamily: ((theme: Theme) => theme.typography.h2),
    left: 0,
  },
};
