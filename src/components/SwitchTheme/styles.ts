import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: (theme: Theme) => theme.spacing([10]),
    color: (theme: Theme) => theme.palette.secondary.main,
  },
  select: {
    '& .MuiSwitch-thumb': {
      color: (theme: Theme) => theme.palette.secondary.main,
    },
    '& .MuiSwitch-track': {
      backgroundColor: (theme: Theme) => theme.palette.background.default,
    },
  },
};
