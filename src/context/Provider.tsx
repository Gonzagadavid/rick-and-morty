import {
  createContext, FC, MouseEvent, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { darkTheme, lightTheme } from 'theme/theme';
import { ThemeProvider } from '@mui/material';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

type ContextType = {
  changeTheme: (event: MouseEvent) => void,
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
  const [selectedTheme, setTheme] = useState <SelectedTheme>(SelectedTheme.DARK);

  const changeTheme = useCallback(() => {
    setTheme((prev) => (prev === SelectedTheme.LIGHT ? SelectedTheme.DARK : SelectedTheme.LIGHT));
  }, []);

  const context = useMemo(() => ({ selectedTheme, changeTheme }), [selectedTheme, changeTheme]);
  return (
    <Context.Provider value={context}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={selectedTheme === SelectedTheme.LIGHT ? lightTheme : darkTheme}>
          {children}
        </ThemeProvider>
      </ApolloProvider>
    </Context.Provider>
  );
};
