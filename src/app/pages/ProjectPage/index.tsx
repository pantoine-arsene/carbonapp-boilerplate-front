import * as React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header';
import { PageWrapper } from 'app/components/PageWrapper';
import { useProjectSlice } from './store/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectProject } from './store/selectors';
import { useParams } from 'react-router-dom';
import { MainData } from './sections/MainData';
import { LoadingWrapper } from 'app/components/LoadingWrapper';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

export function ProjectPage() {
  const { actions } = useProjectSlice();
  const { id } = useParams();
  const { t } = useTranslation();

  const project = useSelector(selectProject);
  const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadProject(id));
  });

  return (
    <>
      <Helmet>
        <title>{project ? project.name : t(messages.title())}</title>
        <meta name="description" content="Projet plateforme carbonapp" />
      </Helmet>
      <Header />
      <PageWrapper>
        {!isLoading && project && <MainData project={project}></MainData>}
        {isLoading && (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        )}
      </PageWrapper>
    </>
  );
}
