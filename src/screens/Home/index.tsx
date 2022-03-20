import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Header } from '~/components/Header';
import { PostCardsCategoryGroup } from '~/components/PostCardsCategoryGroup';
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
        <PostCardsCategoryGroup title="Cursos online" />
      </Body>
    </Container>
  );
}
