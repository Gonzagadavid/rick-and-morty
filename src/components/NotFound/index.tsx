import { Avatar, Box, Typography } from '@mui/material';
import rickIcon from 'images/rick-notFound.png';
import { styles } from './styles';

export const NotFound = () => (
  <Box sx={styles.container}>
    <Avatar src={rickIcon} sx={styles.icon} variant="square" />
    <Typography sx={styles.text}>Not Found</Typography>
  </Box>
);
