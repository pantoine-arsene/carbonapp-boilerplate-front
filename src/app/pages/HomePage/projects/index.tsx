import { SectionWrapper } from 'app/components/SectionWrapper';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { ProjectSearchBar } from './ProjectSearchBar';
import { ProjectTile } from './ProjectTile';
import {
  //selectAmountCarbon,
  //selectError,
  //selectLoading,
  //selectLocation,
  selectProjects,
} from './selectors';
import { media } from 'styles/media';
import { useProjectsSlice } from './slice';

export function Projects() {
  const { actions } = useProjectsSlice();

  //const location = useSelector(selectLocation);
  //const amountCarbon = useSelector(selectAmountCarbon);
  const projects = useSelector(selectProjects);
  //const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  const dispatch = useDispatch();

  //  const onLocationChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //    dispatch(actions.changeLocation(evt.currentTarget.value));
  //  };
  //
  //  const onAmountCarbonChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //    dispatch(actions.changeAmountCarbon(evt.currentTarget.value));
  //  };

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
        <ProjectSearchBar />
        <TileListWrapper>
          {projects.map((elem, idx) => (
            <ProjectTile
              title={elem.title}
              description={elem.description}
              images={elem.images}
              key={idx}
              location={elem.location}
              amountCarbon={elem.amountCarbon}
            />
          ))}
        </TileListWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}

const Wrapper = styled.main`
  padding: 40px 0;
`;

const TileListWrapper = styled.div`
  display: grid;
  grid-gap: 40px 40px;
  ${media.min`grid-template-columns: repeat(1, 1fr);`}
  ${media.mid`grid-template-columns: repeat(2, 1fr);`}
  ${media.full`grid-template-columns: repeat(3, 1fr);`}
`;
