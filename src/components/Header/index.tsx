import React from 'react';

import {
  Container,
  LogoContainer,
  Logo,
  MenuButtonContainer,
  MenuButtonSvg,
} from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuButtonContainer>
        <MenuButtonSvg />
      </MenuButtonContainer>
    </Container>
  );
}
