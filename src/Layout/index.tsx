import { Box } from '@mui/material';
import { TITLE } from 'constants/strings';
import { FC, ReactNode } from 'react';
import { Header } from '../components/Header';
import { styles } from './styles';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Box sx={styles.container}>
    <Header title={TITLE} />
    <Box sx={styles.content}>
      {children}
    </Box>
  </Box>
);
