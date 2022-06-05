import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, Switch } from '@mui/material';
import { Context, SelectedTheme } from 'context/Provider';
import { useContext, useMemo } from 'react';
import { styles } from './styles';

export const SwitchTheme = () => {
  const { changeTheme, selectedTheme } = useContext(Context);
  const icon = useMemo(() => (
    selectedTheme === SelectedTheme.LIGHT
      ? <LightMode sx={styles.icon} />
      : <DarkMode sx={styles.icon} />
  ), [selectedTheme]);

  return (
    <Box sx={styles.container}>
      {icon}
      <Switch onChange={changeTheme} sx={styles.select} />
    </Box>
  );
};
