import { SectionWrapper } from 'app/components/SectionWrapper';
import styled from 'styled-components';
import { Project } from 'types/components';
import { Media } from './Media';

interface Props {
  project: Project;
}

export function MainData({ project }: Props) {
  return (
    <SectionWrapper>
      <Wrapper>
        <Banner src={project.banner} />
        <Title>{project.name}</Title>
        <ShortDescription>{project.shortDescription}</ShortDescription>
        <LongDescription>{project.longDescription}</LongDescription>
        <Medias>
          {project.medias.map((elem, idx) => (
            <Media {...elem} key={idx} />
          ))}
        </Medias>
      </Wrapper>
    </SectionWrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Banner = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.h1``;

const ShortDescription = styled.p`
  font-size: 20px;
`;

const LongDescription = styled.p``;

const Medias = styled.div`
  display: flex;
  padding-bottom: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;
