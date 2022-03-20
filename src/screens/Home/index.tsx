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

type NavigationHomeProp = StackNavigationProp<RootStackParamList, 'Post'>;

export function Home() {
  const navigation = useNavigation<NavigationHomeProp>();
  return (
    <Container>
      <Header />
      <Body>
        <PostCardsCategoryGroup title="Cursos online" />
      </Body>
    </Container>
  );
}
