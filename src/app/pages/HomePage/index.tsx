import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import { Projects } from './projects';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(...messages.title())}</title>
        <meta name="description" content="Homepage carbonapp" />
      </Helmet>
      <Header />
      <PageWrapper>
        <Masthead />
        <Projects />
      </PageWrapper>
    </>
  );
}
