import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouteNames:{[key:string]: string} = {
  HOME: '/',
  CHARACTERS: '/characters',
};

const routes = {
  [RouteNames.HOME]: import('pages/Home'),
  [RouteNames.CHARACTERS]: import('pages/Characters'),
};

const lazyRoutes = Object.entries(routes)
  .map(([route, component]) => ({ route, component: lazy(() => component) }));

export const RoutersComponent: FC = () => (
  <Suspense>
    <Routes>
      {lazyRoutes.map(({ route, component: Component }) => (
        <Route key={route} path={route} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);
