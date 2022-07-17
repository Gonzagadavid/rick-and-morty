import { Theme } from '@mui/material';

export const styles = {
  container: {
    fontSize: '2.5rem',
    height: (theme: Theme) => theme.spacing(110),
    '& .MuiAlert-message': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  icon: {
    width: (theme: Theme) => theme.spacing(80),
    height: (theme: Theme) => theme.spacing(100),
    marginRight: (theme: Theme) => theme.spacing(10),
  },
};
