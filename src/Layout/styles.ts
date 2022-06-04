import { Theme } from '@mui/material';

export const styles = {
  container: {
    height: (theme: Theme) => theme.percent(25),
  },
  content: {
    marginTop: (theme: Theme) => theme.percent(3),
  },
};
