import React from 'react';

import LogoImage from '../../assets/logo.png';

import {
  Container,
  LogoContainer,
  Logo,
  MenuButtonContainer,
  MenuButtonSvg,
} from './styles';
import { BackButton } from '../BackButton';

interface Props {
	haveABackButton?: boolean;
}

export function Header({ haveABackButton }: Props) {
  return (
    <Container>
      <LogoContainer>
        {
					haveABackButton
        && <BackButton />
				}
        <Logo source={LogoImage} />
      </LogoContainer>
      <MenuButtonContainer>
        <MenuButtonSvg />
      </MenuButtonContainer>
    </Container>
  );
}
