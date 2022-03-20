import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Header } from '~/components/Header';
import { PostCard } from '~/components/PostCard';
import { RootStackParamList } from '../../routes';

import {
  Container,
  Body,
} from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <Container>
      <Header />
      <Body>
        <PostCard
          title="Como criar uma landing page de alta ..."
          text="Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ..."
        />
      </Body>
    </Container>
  );
}
