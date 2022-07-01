import { Drawer, ListItem, List } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from 'routes';

interface MenuProps {
  open: boolean;
  onClose: (event: MouseEvent) => void
}

export const Menu: FC<MenuProps> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <List>
      {Object.keys(RouteNames).map((route) => (
        <ListItem key={route}>
          <Link to={RouteNames[route]}>{route}</Link>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
