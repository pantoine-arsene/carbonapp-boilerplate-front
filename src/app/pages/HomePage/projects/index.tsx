import { SectionWrapper } from 'app/components/SectionWrapper';
import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { ProjectTile } from './ProjectTile';

const projects = [
  {
    title: 'Projet 1',
    description: 'Foret drôme',
    images: ['', ''],
  },
  {
    title: 'Projet 2',
    description: 'Foret loire atlantique',
    images: ['', ''],
  },
];

export function Projects() {
  return (
    <SectionWrapper backgroundColor={StyleConstants.LIGHTERGREY}>
      <Wrapper>
        {projects.map((elem, idx) => (
          <ProjectTile
            title={elem.title}
            description={elem.description}
            images={elem.images}
            key={idx}
          />
        ))}
      </Wrapper>
    </SectionWrapper>
  );
}

const Wrapper = styled.main`
  height: 1000px;
  padding: 40px 0;
`;
