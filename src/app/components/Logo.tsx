import styled from 'styled-components';
import Source from 'assets/logo_carbonapp_2021.webp';

export function Logo() {
  return <Image src={Source} />;
}

const Image = styled.img`
  width: 150px;
`;
