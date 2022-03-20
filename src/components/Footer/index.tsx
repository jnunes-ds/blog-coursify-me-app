import React from 'react';

import coursifyLogo from '~/assets/logo-coursify-w.png.png';
import {
  Container,
  LogoContainer,
  Logo,
  Text,
  Button,
  ButtonLabel,
} from './styles';

export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={coursifyLogo} />
      </LogoContainer>
      <Text>O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Text>
      <Button>
        <ButtonLabel>Quero conhecer a plataforma!</ButtonLabel>
      </Button>
    </Container>
  );
}
