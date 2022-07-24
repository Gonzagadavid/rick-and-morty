import { GitHub } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from './styles';

export const LogoBy = () => (
  <Link to="https://github.com/Gonzagadavid/rick-and-morty" style={styles.link}>
    <Box sx={styles.container}>
      <GitHub sx={styles.icon} />
      <Typography sx={styles.text}>David Gonzaga</Typography>
    </Box>
  </Link>
);
