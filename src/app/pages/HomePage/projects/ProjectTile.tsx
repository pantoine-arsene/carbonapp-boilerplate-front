import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { Project } from 'types/components/Project';

//function truncateString(length: number, str: string): string {
//  if (str.length > length) return str.substring(0, length - 3) + '...';
//  return str;
//}

export function ProjectTile(p: Project) {
  return (
    <Wrapper>
      <TextWrapper>
        <TileTitle>{p.name}</TileTitle>
        <TileDescription>{p.shortDescription}</TileDescription>
        <TileDetail>
          <TileLocation>{p.location}</TileLocation>
          <TileCarbon>{p.tonnage} TeqCO2</TileCarbon>
        </TileDetail>
      </TextWrapper>
      <TileImage src={p.banner} />
    </Wrapper>
  );
}

const TextWrapper = styled.div`
  padding: 20px;
`;

const TileTitle = styled.h1`
  overflow: hidden;
  white-space: nowrap;
`;

const TileDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TileLocation = styled.span``;

const TileCarbon = styled.span``;

const TileDescription = styled.p`
  font-weight: 900;
  overflow: hidden;
  white-space: nowrap;
`;

const TileImage = styled.img`
  width: 100%;
  flex-grow: 1;
  object-fit: cover;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: ${StyleConstants.WHITE};
  cursor: pointer;
`;
