import {
  Box, Paper, Skeleton, Chip,
} from '@mui/material';
import { FIVE, NINE, TWENTY } from 'constants/numbers';
import { EMPTY } from 'constants/strings';
import { useMemo } from 'react';
import { styles } from '../styles';

export const SkeletonCharacter = () => {
  const chips = useMemo(() => (
    Array(NINE).fill(EMPTY).map((_, index) => (
      <Skeleton key={`${index + TWENTY}`} sx={styles.chip}>
        <Chip sx={styles.chipSkeleton} />
      </Skeleton>
    ))
  ), []);

  const infoPapers = useMemo(() => (
    Array(FIVE).fill(EMPTY).map((_, index) => (
      <Skeleton key={`${index + TWENTY}`}>
        <Paper sx={styles.infoPaper} />
      </Skeleton>
    ))
  ), []);
  return (
    <>
      <Skeleton variant="text" sx={styles.title} />
      <Box sx={styles.container}>
        <Skeleton sx={styles.image} variant="rectangular" />
        <Box sx={styles.infoContainer}>
          {infoPapers}
          <Box sx={styles.chipContainer}>
            {chips}
          </Box>
        </Box>
      </Box>
    </>
  );
};
