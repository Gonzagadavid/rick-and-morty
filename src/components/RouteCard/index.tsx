import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import portal from 'images/portal.png';
import { styles } from './styles';

interface RouteCardProps {
  path: string
  title: string
}

export const RouteCard:FC<RouteCardProps> = ({ path, title }) => (
  <Link to={path}>
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{title}</Typography>
      <Avatar sx={styles.avatar} src={portal} />
    </Box>
  </Link>
);
