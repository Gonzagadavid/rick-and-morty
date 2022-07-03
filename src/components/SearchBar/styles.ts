import { Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    width: (theme: Theme) => theme.percent(25),
    height: (theme: Theme) => theme.spacing([15]),
    margin: (theme: Theme) => theme.spacing([10]),
  },
  input: {
    width: (theme: Theme) => theme.spacing([100]),
    '& .MuiOutlinedInput-root': {
      fontSize: '1.5rem',
      padding: (theme: Theme) => theme.spacing([2]),
      height: (theme: Theme) => theme.spacing([10]),
      width: (theme: Theme) => theme.percent(25),
      border: (theme: Theme) => `solid 2px ${theme.palette.primary.main}`,
      borderRadius: (theme: Theme) => theme.spacing([2, 0, 0, 2]),
      '&:hover fieldset': {
        border: (theme: Theme) => `solid 1px ${theme.palette.primary.main}`,
      },
      '&:focus fieldset': {
        border: 'none',
      },
    },
  },
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
