import { AppBar, Avatar, IconButton } from '@mui/material';
import { FC } from 'react';
import logo from 'images/Daco_4305710.png';
import { Menu as MenuIcon } from '@mui/icons-material';
import { SwitchTheme } from 'components/SwitchTheme';
import { Menu } from 'components/Menu';
import { useModal } from 'hooks/useModal';
import { styles } from './styles';

export const Header: FC = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <AppBar sx={styles.container}>
      <IconButton sx={styles.menu} onClick={onOpen}>
        <MenuIcon sx={styles.icon} />
      </IconButton>
      <Avatar src={logo} sx={styles.logo} variant="square" />
      <SwitchTheme />
      <Menu open={isOpen} onClose={onClose} />
    </AppBar>
  );
};
