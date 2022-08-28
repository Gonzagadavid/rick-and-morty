import {
  Box, Paper, Skeleton, Chip,
} from '@mui/material';
import { FIVE, NINE, TWENTY } from 'constants/numbers';
import { EMPTY } from 'constants/strings';
import { styles } from '../styles';

const chips = Array(NINE).fill(EMPTY).map((_, index) => (
  <Skeleton key={`${index + TWENTY}`} sx={styles.chip}>
    <Chip sx={styles.chipSkeleton} />
  </Skeleton>
));

const infoPapers = Array(FIVE).fill(EMPTY).map((_, index) => (
  <Skeleton key={`${index + TWENTY}`}>
    <Paper sx={styles.infoPaper} />
  </Skeleton>
));

export const SkeletonCharacter = () => (
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
