import { Box, Typography } from '@mui/material';
import { START_GAME } from 'constants/strings';
import spaceShip from 'images/gifs/space_ship.gif';
import { styles } from './styles';

export const StartContainer = () => (
  <Box sx={styles.container}>
    <img src={spaceShip} alt="space ship gif" />
    <Typography sx={styles.startMessage}>{START_GAME}</Typography>
  </Box>
);
