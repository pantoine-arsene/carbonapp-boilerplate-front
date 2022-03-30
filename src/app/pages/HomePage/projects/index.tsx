import { SectionWrapper } from 'app/components/SectionWrapper';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { ProjectTile } from './ProjectTile';
import {
  selectLoading,
  //selectError,
  //selectLoading,
  selectProjects,
} from './store/selectors';
import { media } from 'styles/media';
import { useProjectsSlice } from './store/slice';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function Projects() {
  const { actions } = useProjectsSlice();

  const projects = useSelector(selectProjects);
  const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadProjects());
  });

  return (
    <SectionWrapper backgroundColor={StyleConstants.LIGHTERGREY}>
      <Wrapper>
        {projects?.length > 0 && (
          <TileListWrapper>
            {projects.map((elem, idx) => (
              <ProjectTile {...elem} key={idx} />
            ))}
          </TileListWrapper>
        )}
        {!isLoading &&
          (!projects ||
            (projects?.length === 0 && (
              <NoProject>Pas de projet disponible</NoProject>
            )))}
        {isLoading && (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        )}
      </Wrapper>
    </SectionWrapper>
  );
}

const Wrapper = styled.main`
  padding: 40px 0;
  height: 480px;
`;

const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TileListWrapper = styled.div`
  display: grid;
  grid-gap: 40px 40px;
  ${media.min`grid-template-columns: repeat(1, 1fr);`}
  ${media.mid`grid-template-columns: repeat(2, 1fr);`}
  ${media.full`grid-template-columns: repeat(3, 1fr);`}
`;

const NoProject = styled.span``;
