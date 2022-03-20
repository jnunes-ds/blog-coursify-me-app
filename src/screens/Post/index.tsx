import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container,
  Body,
  Subtitle,
  Title,
} from './styles';
import { RootStackParamList } from '../../routes';
import { Header } from '~/components/Header';

type NavigationPostProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props{
    title: string;
}

export function Post() {
  const navigation = useNavigation<NavigationPostProp>();

  return (
    <Container>
      <Header haveABackButton />
      <Body>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Title> Hello World! </Title>
          <Subtitle>From Post screen</Subtitle>
        </TouchableWithoutFeedback>
      </Body>
    </Container>
  );
}
