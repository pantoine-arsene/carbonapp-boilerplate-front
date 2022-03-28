import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function ProjectPage() {
  return (
    <>
      <Helmet>
        <title>Projet</title>
        <meta name="description" content="Projet plateforme carbonapp" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        
      </PageWrapper>
    </>
  );
}
