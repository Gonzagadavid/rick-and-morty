import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100vw',
    marginTop: (theme: Theme) => theme.spacing(50),
  },
  startMessage: {
    color: 'white',
    position: 'fixed',
    fontSize: '100px',
    fontFamily: ((theme: Theme) => theme.typography.h2),
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    marginTop: (theme: Theme) => theme.spacing(50),

  },
  messageText: {
    fontFamily: ((theme: Theme) => theme.typography.h2),
    color: ((theme: Theme) => theme.palette.primary.main),
    lineHeight: 2,
    textAlign: 'center',
  },
  image: {
    width: (theme: Theme) => theme.spacing(250),
    height: (theme: Theme) => theme.spacing(200),
    marginBotton: (theme: Theme) => theme.spacing(50),
  },
};
