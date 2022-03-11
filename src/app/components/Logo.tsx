import * as React from 'react';
import styled from 'styled-components';

interface Props {
  size: string;
  color: string;
}

export function Logo({ size, color }: Props) {
  return (
    <StyledLogo size={size}>
      Carbon<ColoredPart color={color}>app</ColoredPart>
    </StyledLogo>
  );
}

const StyledLogo = styled.h1<{
  size: string;
}>`
  font-size: ${({ size }) => size};
`;

const ColoredPart = styled.span<{
  color: string;
}>`
  color: ${({ color }) => color};
`;
