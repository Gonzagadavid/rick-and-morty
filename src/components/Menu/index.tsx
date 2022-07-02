import {
  Drawer, ListItem, List, Avatar, IconButton,
} from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from 'routes';
import logo from 'images/rick-and-morty-decal-decals-rick-and-morty-240911.png';
import { Close } from '@mui/icons-material';
import { styles } from './styles';

interface MenuProps {
  open: boolean;
  onClose: () => void
}

export const Menu: FC<MenuProps> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} sx={styles.drawer}>
    <List sx={styles.container}>
      <IconButton
        sx={styles.close}
        onClick={onClose}
      >
        <Close />
      </IconButton>
      <Avatar src={logo} sx={styles.avatar} />
      {Object.keys(RouteNames).map((route) => (
        <ListItem key={route} onClick={onClose}>
          <Link to={RouteNames[route]}>{route}</Link>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
