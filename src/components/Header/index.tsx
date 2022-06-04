import { AppBar, Avatar, IconButton } from '@mui/material';
import { FC } from 'react';
import logo from 'images/Daco_4305710.png';
import { Menu } from '@mui/icons-material';
import { styles } from './styles';

interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = () => (
  <AppBar sx={styles.container}>
    <IconButton sx={styles.menu}>
      <Menu sx={styles.icon} />
    </IconButton>
    <Avatar src={logo} sx={styles.logo} variant="square" />
  </AppBar>
);
