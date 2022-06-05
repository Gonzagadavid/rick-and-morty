import {
  ChangeEvent,
  createContext, FC, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { darkTheme, lightTheme } from 'theme/theme';
import { ThemeProvider } from '@mui/material';

type ContextType = {
  changeTheme: (event: ChangeEvent) => void,
  selectedTheme: string
}

export const Context = createContext <ContextType>({} as ContextType);

interface ProviderProps {
  children: ReactNode
}
export enum SelectedTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [selectedTheme, setTheme] = useState <SelectedTheme>(SelectedTheme.LIGHT);

  const changeTheme = useCallback(() => {
    setTheme((prev) => (prev === SelectedTheme.LIGHT ? SelectedTheme.DARK : SelectedTheme.LIGHT));
  }, []);

  const context = useMemo(() => ({ selectedTheme, changeTheme }), [selectedTheme, changeTheme]);
  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={selectedTheme === SelectedTheme.LIGHT ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};
