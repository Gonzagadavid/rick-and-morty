import { Box } from '@mui/material';
import { RouteCard } from 'components/RouteCard';
import { FC, useMemo } from 'react';
import { RouteNames } from 'routes';

const { HOME, ...routes } = RouteNames;

const Home: FC = () => {
  const routesList = useMemo(() => (
    Object.entries(routes).map(([routeName, path]) => (
      <RouteCard key={routeName} title={routeName} path={path} />
    ))
  ), []);

  return (
    <Box>
      {routesList}
    </Box>
  );
};

export default Home;
