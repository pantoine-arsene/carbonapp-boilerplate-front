import { A } from 'app/components/A';
import * as React from 'react';
import styled from 'styled-components';
import { media } from 'styles/media';
import { StyleConstants } from 'styles/StyleConstants';
import { Logo } from './Logo';

export function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Logo
          color={StyleConstants.FOREST_GREEN}
          size={'24px'}
          onClick={() => console.log('click logo')}
        />
        <Links>
          <A>Proposer un projet</A>
          <A>Profil</A>
        </Links>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  background-color: ${StyleConstants.LIGHTERGREY};
  position: fixed;
  top: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 95%;
  ${media.full`
    width: ${StyleConstants.MAX_WIDTH};
  `}
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  width: 200px;
  height: fit-content;
  justify-content: space-between;
  font-weight: 900;
`;
