/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';
import { useTranslation } from 'react-i18next';
import { Router } from './Routes';

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
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
