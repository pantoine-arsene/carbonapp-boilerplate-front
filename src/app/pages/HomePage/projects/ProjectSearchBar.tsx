import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export function ProjectSearchBar() {
  return (
    <Wrapper>
      <Input type="number" placeholder="Quantité de carbone (TCO2)"></Input>
      <Input type="text" placeholder="Localisation"></Input>
      <SearchButton>Chercher</SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 60%;
  height: 40px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  height: 100%;
  padding: 0 10px;
  border: none;
  outline: none;
  flex: 1;
`;

//const InputWithUnit = styled.div`
//  display: flex;
//  flex: 1;
//`;
//
//const Unit = styled.span`
//  margin-left: -40px;
//`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: ${StyleConstants.LIGHTGREY};
  padding: 0 20px;
  cursor: pointer;
  font-weight: 900;
`;
