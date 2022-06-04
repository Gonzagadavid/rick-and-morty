import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Header } from '../components/Header';
import { styles } from './styles';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Box sx={styles.container}>
    <Header title="Rick and Morty" />
    <Box sx={styles.content}>
      {children}
    </Box>
  </Box>
);
