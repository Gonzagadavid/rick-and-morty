import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    width: {
      xs: theme.spacing([80]),
      sm: theme.spacing([100]),
      lg: theme.spacing([130]),
    },
    height: theme.spacing([15]),
    margin: theme.spacing([10, 0]),
  }),
  input: (theme: Theme) => ({
    width: theme.spacing([100]),
    '& .MuiOutlinedInput-root': {
      fontSize: '1.5rem',
      padding: theme.spacing([2]),
      height: theme.spacing([10]),
      width: theme.percent(25),
      border: `solid 2px ${theme.palette.primary.main}`,
      borderRadius: theme.spacing([2, 0, 0, 2]),
      '&:hover fieldset': {
        border: `solid 1px ${theme.palette.primary.main}`,
      },
      '&:focus fieldset': {
        border: 'none',
      },
    },
  }),
  button: {
    borderRadius: (theme: Theme) => theme.spacing([0, 2, 2, 0]),
    height: (theme: Theme) => theme.spacing([10]),
    color: (theme: Theme) => theme.palette.secondary.main,
    background: (theme: Theme) => theme.palette.primary.main,
    ':hover': {
      color: (theme: Theme) => theme.palette.secondary.main,
      background: (theme: Theme) => theme.palette.primary.main,
    },
  },
};
