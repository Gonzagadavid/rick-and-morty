import { Theme } from '@mui/material';

export const styles = {
  drawer: {
    '& .MuiPaper-root': {
      boxShadow: (theme: Theme) => `0px 1px 10px ${theme.image}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  container: {
    width: (theme: Theme) => theme.spacing([70]),
    position: 'relative',
    padding: (theme: Theme) => theme.spacing([10, 2]),

  },
  avatar: {
    width: (theme: Theme) => theme.spacing([60]),
    height: (theme: Theme) => theme.spacing([50]),
    marginTop: (theme: Theme) => theme.spacing([10]),
    filter: (theme: Theme) => `drop-shadow(0px 0px 2px ${theme.image});`,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  list: {
  },
  listItem: {
    '& a': {
      textDecoration: 'none',
      padding: (theme: Theme) => theme.spacing([1]),
      color: (theme: Theme) => theme.palette.text.primary,
      fontSize: '1.5rem',
    },
  },
};
