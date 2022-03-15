import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { Project as ProjectTileProps } from './types';

function truncateString(length: number, str: string): string {
  if (str.length > length) return str.substring(0, length - 3) + '...';
  return str;
}

export function ProjectTile({
  title,
  description,
  images,
  location,
  amountCarbon,
}: ProjectTileProps) {
  return (
    <Wrapper>
      <TextWrapper>
        <TileTitle>{truncateString(30, title)}</TileTitle>
        <TileDescription>{truncateString(50, description)}</TileDescription>
        <TileDetail>
          <TileLocation>{location}</TileLocation>
          <TileCarbon>{amountCarbon} TCO2</TileCarbon>
        </TileDetail>
      </TextWrapper>
      <TileImage src={images[0]} />
    </Wrapper>
  );
}

const TextWrapper = styled.div`
  padding: 20px;
`;

const TileTitle = styled.h1``;

const TileDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TileLocation = styled.span``;

const TileCarbon = styled.span``;

const TileDescription = styled.p`
  font-weight: 900;
`;

const TileImage = styled.img`
  width: 100%;
  flex-grow: 1;
  object-fit: cover;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  overflow: hidden;
  background-color: ${StyleConstants.WHITE};
  cursor: pointer;
`;
