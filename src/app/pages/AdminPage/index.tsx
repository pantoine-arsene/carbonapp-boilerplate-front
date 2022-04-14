import { Header } from 'app/components/Header';
import { Helmet } from 'react-helmet-async';
import { MainData } from './sections/MainData';

export function AdminPage() {
  return (
    <>
      <Helmet>
        <title>Page admin</title>
        <meta name="description" content="Projet plateforme carbonapp" />
      </Helmet>
      <Header />
      <MainData />
    </>
  );
}
