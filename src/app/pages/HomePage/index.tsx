import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import { Projects } from './projects';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Accueil</title>
        <meta name="description" content="Accueil plateforme carbonapp" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <Projects />
      </PageWrapper>
    </>
  );
}
