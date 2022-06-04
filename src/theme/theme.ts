import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    spacing: (_values: Array<number>) => string,
    shape: {
      borderRadius: number,
    },
    percent: (_value: number) => string
  }
  interface Theme {
    spacing: (_values: number[]) => string,
    shape: {
      borderRadius: number,
    },
    percent: (_value: number) => string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3eb3c5',
    },
    secondary: {
      main: '#00f53f',
    },
    background: {
      default: '#e0f7fa',
      paper: '#b2ebf2',
    },
  },
  typography: {
    fontFamily: 'Julius Sans One',
    h1: {
      fontFamily: 'Rock Salt',
    },
    h2: {
      fontFamily: 'Rock Salt',
    },
    h3: {
      fontFamily: 'Rock Salt',
    },
    h4: {
      fontFamily: 'Rock Salt',
    },
    h5: {
      fontFamily: 'Rock Salt',
    },
    h6: {
      fontFamily: 'Rock Salt',
    },
  },
  spacing: (values) => values.map((value) => `${value * 4}px`).join(' '),
  shape: {
    borderRadius: 4,
  },
  percent: (value) => `${value * 4}%`,
});

export default theme;
