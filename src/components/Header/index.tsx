import React from 'react';
import { Feather } from '@expo/vector-icons';

import LogoImage from '../../assets/logo.png';

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
        <Logo source={LogoImage} />
      </LogoContainer>
      <MenuButtonContainer>
        {/* <Feather size={22} /> */}
        <MenuButtonSvg />
      </MenuButtonContainer>
    </Container>
  );
}
