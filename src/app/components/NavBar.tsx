import { A } from 'app/components/A';
import * as React from 'react';
import styled from 'styled-components';
//import { media } from 'styles/media';
import { StyleConstants } from 'styles/StyleConstants';
import { Logo } from './Logo';

export function NavBar() {
  return (
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
  );
}

const Links = styled.div`
  display: flex;
  width: 200px;
  height: fit-content;
  justify-content: space-between;
  font-weight: 900;
`;

const Wrapper = styled.header`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  width: 100%;
  padding: 0px calc((100% - ${StyleConstants.MAX_WIDTH}) / 2);
  background-color: ${StyleConstants.LIGHTERGREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;
