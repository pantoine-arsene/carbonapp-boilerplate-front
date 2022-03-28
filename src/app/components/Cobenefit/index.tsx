import * as React from 'react';
import styled from 'styled-components';
import { Cobenefit as Props } from 'types/components';

export function Cobenefit({ image, title, description }: Props) {
  return (
    <Wrapper>
      <Icon src={image} />
      <Detail>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Detail>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  padding: 10px;
`;

const Icon = styled.img`
  height: 100%;
`;

const Detail = styled.div`
  grow-flex: 1;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.span`
  font-size: 16px;
`;
