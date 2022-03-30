import { A } from 'app/components/A';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { media } from 'styles/media';
import { StyleConstants } from 'styles/StyleConstants';
import { L } from '../Link';
import { Logo } from '../Logo';
//import { TextLogo } from '../TextLogo';
import { LangSelect } from './LangSelect';
import { messages } from './messages';

export function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Block>
          <L to="/">
            {/*<TextLogo color={StyleConstants.MAIN_COLOR} size={'24px'} />*/}
            <Logo />
          </L>
          <A href="https://carbonapp.fr" target="_blank">
            {t(messages.showcase())}
          </A>
        </Block>
        <Block>
          <LangSelect />
          <Links>
            <A>{t(messages.funders())}</A>
            <A>{t(messages.projectHolders())}</A>
          </Links>
        </Block>
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

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Links = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-between;
  gap: 20px;
`;
