import { Avatar, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

interface CardProps {
  name: string,
  image: string,
}

export const CardComponent: FC<CardProps> = ({ name, image }) => (
  <Paper sx={styles.card}>
    <Avatar sx={styles.image} src={image} variant="square" />
    <Typography sx={styles.name}>{name}</Typography>
  </Paper>
);
