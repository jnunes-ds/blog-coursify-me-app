import React, { useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
} from './styles';

export function BackButton() {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container onPress={handleGoBack}>
      <MaterialIcons size={33} name="arrow-back" />
    </Container>
  );
}
