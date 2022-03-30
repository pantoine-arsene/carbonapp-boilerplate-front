/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ProjectPage } from './pages/ProjectPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Carbonapp"
        defaultTitle="Carbonapp"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Carbonapp platform" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
        <Route
          path={process.env.PUBLIC_URL + '/project/:id'}
          element={<ProjectPage />}
        />
        <Route
          path={process.env.PUBLIC_URL + '/*'}
          element={<NotFoundPage />}
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
