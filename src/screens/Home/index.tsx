import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../../routes';

import {
  Container,
} from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <Container />
  );
}
