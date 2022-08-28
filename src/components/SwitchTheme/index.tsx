import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { Context, SelectedTheme } from 'context/Provider';
import { useContext } from 'react';
import { styles } from './styles';

export const SwitchTheme = () => {
  const { changeTheme, selectedTheme } = useContext(Context);
  const icon = selectedTheme === SelectedTheme.LIGHT
    ? <LightMode sx={styles.icon} />
    : <DarkMode sx={styles.icon} />;

  return (
    <Box sx={styles.container}>
      <IconButton onClick={changeTheme}>
        {icon}
      </IconButton>
    </Box>
  );
};
