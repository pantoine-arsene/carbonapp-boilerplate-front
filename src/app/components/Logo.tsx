import * as React from 'react';
import styled from 'styled-components';

interface Props {
  size: string;
  color: string;
  onClick?: () => void;
}

export function Logo({ size, color, onClick }: Props) {
  return (
    <StyledLogo
      size={size}
      onClick={() => onClick && onClick()}
      isClickable={onClick !== undefined}
    >
      Carbon<ColoredPart color={color}>app</ColoredPart>
    </StyledLogo>
  );
}

const StyledLogo = styled.h1<{
  size: string;
  isClickable: boolean;
}>`
  font-size: ${({ size }) => size};
  ${({ isClickable }) => isClickable && 'cursor: pointer;'}
  margin: 0;
`;

const ColoredPart = styled.span<{
  color: string;
}>`
  color: ${({ color }) => color};
`;
