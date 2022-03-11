import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  title: string;
  description: string;
  images: Array<string>;
}

export function ProjectTile({ title, description, images }: Props) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: ${StyleConstants.WHITE};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
