import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Header, PostCardsCategoryGroup, Footer } from '~/components';
import { RootStackParamList } from '../../routes';

import {
  Container,
  Content,
  Body,
} from './styles';

type NavigationHomeProp = StackNavigationProp<RootStackParamList, 'Post'>;

export function Home() {
  const navigation = useNavigation<NavigationHomeProp>();
  return (
    <Container>
      <Header />
      <Content showsVerticalScrollIndicator={false}>
        <Body>
          <PostCardsCategoryGroup title="Cursos online" />
        </Body>
        <Footer />
      </Content>
    </Container>
  );
}
