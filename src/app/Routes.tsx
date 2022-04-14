import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { ProjectPage } from './pages/ProjectPage/Loadable';
import { AdminPage } from './pages/AdminPage/Loadable';

export function Router() {
  return (
    <>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
        <Route
          path={process.env.PUBLIC_URL + '/project/:id'}
          element={<ProjectPage />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/admin'}
          element={<AdminPage />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/*'}
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}
