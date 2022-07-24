import { Loading } from 'components/Loading';
import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouteNames:{[key:string]: string} = {
  HOME: '/',
  CHARACTERS: '/characters',
  LOCATIONS: '/locations',
  EPISODES: '/episodes',
  CHARACTER: '/character/:id',
};

const routes = {
  [RouteNames.HOME]: import('pages/Home'),
  [RouteNames.CHARACTERS]: import('pages/Characters'),
  [RouteNames.LOCATIONS]: import('pages/Locations'),
  [RouteNames.EPISODES]: import('pages/Episodes'),
  [RouteNames.CHARACTER]: import('pages/Charater'),
};

const lazyRoutes = Object.entries(routes)
  .map(([route, component]) => ({ route, component: lazy(() => component) }));

export const RoutersComponent: FC = () => (
  <Suspense fallback={<Loading paged />}>
    <Routes>
      {lazyRoutes.map(({ route, component: Component }) => (
        <Route key={route} path={route} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);
