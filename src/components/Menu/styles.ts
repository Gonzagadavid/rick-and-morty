import { Theme } from '@mui/material';

export const styles = {
  drawer: {
    '& .MuiPaper-root': {
      boxShadow: (theme: Theme) => `5px 5px 10px ${theme.image}`,
    },
  },
  container: {
    width: (theme: Theme) => theme.spacing([70]),
    position: 'relative',
  },
  avatar: {
    width: (theme: Theme) => theme.spacing([60]),
    height: (theme: Theme) => theme.spacing([50]),
    marginTop: (theme: Theme) => theme.spacing([10]),
    filter: (theme: Theme) => `drop-shadow(0px 0px 5px ${theme.image});`,
  },
  close: {
    position: 'absolute',
    right: 10,
  },
};
