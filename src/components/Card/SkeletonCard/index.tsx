import {
  Card, Skeleton,
} from '@mui/material';
import { FC } from 'react';
import { styles } from '../styles';

export const SkeletonCard: FC = () => (
  <Card sx={styles.card}>
    <Skeleton variant="rectangular" sx={styles.image} />
    <Skeleton variant="text" width={220} height={40} />
  </Card>
);
