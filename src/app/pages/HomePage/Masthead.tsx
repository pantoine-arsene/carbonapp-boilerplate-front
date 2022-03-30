import { SectionWrapper } from 'app/components/SectionWrapper';
import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Masthead() {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <Wrapper>
        <Title>
          <Trans i18nKey="landingPage.valueProposition" t={t}>
            <></>
            <Important></Important>
          </Trans>
        </Title>
      </Wrapper>
    </SectionWrapper>
  );
}

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

const Important = styled.span`
  color: ${StyleConstants.MAIN_COLOR};
`;
