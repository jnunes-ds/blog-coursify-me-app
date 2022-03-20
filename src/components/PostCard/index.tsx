import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RenderHTML from 'react-native-render-html';
import space from '../../assets/space.png';

import {
  Container,
  TextsContainer,
  TitleContainer,
  Title,
  Text,
  CardImageContainer,
  CardImage,
  LinkToPost,
  LinkToPostLabel,
} from './styles';
import { RootStackParamList } from '~/routes';

interface Props{
		title: string;
		text: string;
}

type NavigationPostCardProp = StackNavigationProp<RootStackParamList, 'Post'>;

export function PostCard({ title, text } : Props) {
  const navigation = useNavigation<NavigationPostCardProp>();
  const TextReplaced = text.replace('<p>', '');

  const handleGoToPost = useCallback(() => {
    navigation.navigate('Post');
  }, [navigation]);

  return (
    <Container>
      <CardImageContainer>
        <CardImage source={space} />
      </CardImageContainer>
      <TextsContainer>
        <TitleContainer>
          <Title numberOfLines={2}>
            {title}
          </Title>
        </TitleContainer>
        <Text
          numberOfLines={4}
        >
          {TextReplaced}
        </Text>
        <LinkToPost onPress={handleGoToPost}>
          <LinkToPostLabel>Leia mais</LinkToPostLabel>
        </LinkToPost>
      </TextsContainer>
    </Container>
  );
}
