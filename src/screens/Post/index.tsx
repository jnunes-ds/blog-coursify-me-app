import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import imagePoste from '../../assets/space.png';
import {
  Container,
  Content,
  Body,
  Title,
  Text,
  PostImageContainer,
  PostImage,
} from './styles';
import { RootStackParamList } from '../../routes';
import { Header, Footer } from '~/components';

type NavigationPostProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props{
    title: string;
		text: string;
}

export function Post() {
  const navigation = useNavigation<NavigationPostProp>();

  return (
    <Container>
      <Header haveABackButton />
      <Content>
        <Body>
          <Title>como criar uma landing page de alta conversão para o seu curso online </Title>
          <Text>Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar resultados.</Text>
          <Text>No mercado competitivo de hoje em dia, é justo dizer que quem tem a melhor página de venda sai na frente.</Text>
          <PostImageContainer>
            <PostImage source={imagePoste} />
          </PostImageContainer>
          <Text>Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar resultados.</Text>
          <Text>No mercado competitivo de hoje em dia, é justo dizer que quem tem a melhor página de venda sai na frente.</Text>
        </Body>
        <Footer />
      </Content>
    </Container>
  );
}
