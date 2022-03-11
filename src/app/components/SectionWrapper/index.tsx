import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  backgroundColor?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ backgroundColor, children }: Props) {
  return (
    <Wrapper backgroundColor={backgroundColor || 'transparent'}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.section<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  margin: 0;
`;

const Content = styled.div`
  width: ${StyleConstants.MAX_WIDTH};
  margin: 0 auto;
`;
