import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${StyleConstants.BLACK};
  transition: color 0.1s ease;
  font-weight: 600;
  &:hover {
    color: ${StyleConstants.MAIN_COLOR};
  }
`;
