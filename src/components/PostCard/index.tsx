import React from 'react';
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

interface Props{
		title: string;
		text: string;
}

export function PostCard({ title, text } : Props) {
  return (
    <Container>
      <CardImageContainer>
        <CardImage source={space} />
      </CardImageContainer>
      <TextsContainer>
        <TitleContainer>
          <Title>
            {title}
          </Title>
        </TitleContainer>
        <Text>{text}</Text>
        <LinkToPost>
          <LinkToPostLabel>Leia mais</LinkToPostLabel>
        </LinkToPost>
      </TextsContainer>
    </Container>
  );
}
