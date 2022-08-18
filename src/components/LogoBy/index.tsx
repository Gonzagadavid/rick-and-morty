import { GitHub } from '@mui/icons-material';
import { Box, Typography, Link } from '@mui/material';
import { styles } from './styles';

export const LogoBy = () => (
  <Link href="https://github.com/Gonzagadavid/rick-and-morty" style={styles.link}>
    <Box sx={styles.container}>
      <GitHub sx={styles.icon} />
      <Typography sx={styles.text}>David Gonzaga</Typography>
    </Box>
  </Link>
);
