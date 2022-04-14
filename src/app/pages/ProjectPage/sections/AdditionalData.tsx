import { SectionWrapper } from 'app/components/SectionWrapper';
import styled from 'styled-components';

export function AdditionalData() {
  return (
    <SectionWrapper>
      <Wrapper></Wrapper>
    </SectionWrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
`;
