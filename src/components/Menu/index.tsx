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

const { CHARACTER, ...routes } = RouteNames;
export const Menu: FC<MenuProps> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} sx={styles.drawer}>
    <IconButton
      sx={styles.close}
      onClick={onClose}
    >
      <Close />
    </IconButton>
    <Avatar src={logo} sx={styles.avatar} />
    <List sx={styles.container}>
      {Object.keys(routes).map((route) => (
        <ListItem sx={styles.listItem} key={route} onClick={onClose}>
          <Link to={RouteNames[route]}>{route}</Link>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
