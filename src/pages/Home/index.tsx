import { Box } from '@mui/material';
import { RouteCard } from 'components/RouteCard';
import { FC } from 'react';
import { RouteNames } from 'routes';
import { styles } from './styles';

const { HOME, CHARACTER, ...routes } = RouteNames;

const routesList = Object.entries(routes).map(([routeName, path]) => (
  <RouteCard key={routeName} title={routeName} path={path} />
));

const Home: FC = () => (
  <Box sx={styles.container}>
    {routesList}
  </Box>
);

export default Home;
