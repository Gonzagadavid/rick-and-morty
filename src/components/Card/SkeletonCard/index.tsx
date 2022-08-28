import {
  Card, Skeleton,
} from '@mui/material';
import { FORTY, TWO_HUNDRED_TWENTY } from 'constants/numbers';
import { FC } from 'react';
import { styles } from '../styles';

export const SkeletonCard: FC = () => (
  <Card sx={styles.card}>
    <Skeleton variant="rectangular" sx={styles.image} />
    <Skeleton variant="text" width={TWO_HUNDRED_TWENTY} height={FORTY} />
  </Card>
);
