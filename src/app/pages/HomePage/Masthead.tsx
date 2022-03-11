import { SectionWrapper } from 'app/components/SectionWrapper';
import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Masthead() {
  return (
    <SectionWrapper>
      <Wrapper>
        <Title>
          Trouvez le projet de compensation carbone qui <KeyWord>vous</KeyWord>{' '}
          correspond
        </Title>
      </Wrapper>
    </SectionWrapper>
  );
}

const KeyWord = styled.span`
  color: ${StyleConstants.FOREST_GREEN};
`;

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;

const Title = styled.h1`
  font-size: 56px;
`;
