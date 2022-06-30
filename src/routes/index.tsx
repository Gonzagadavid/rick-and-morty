import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouteNames = {
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
  <BrowserRouter>
    <Suspense>
      <Routes>
        {lazyRoutes.map(({ route, component: Component }) => (
          <Route path={route} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
