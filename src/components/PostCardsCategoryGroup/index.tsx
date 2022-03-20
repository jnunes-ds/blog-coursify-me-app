import React, {
  useRef, useCallback, useState, useEffect,
} from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { PostCard } from '../PostCard';

import {
  Container,
  TitleContainer,
  Title,
  CarouselContainer,
  PostCardContainer,
  SeeMoreContainer,
  SeeMoreText,
} from './styles';

interface Props{
		title: string;
}

export function PostCardsCategoryGroup({ title } : Props) {
  const flatListRef = useRef<FlatList>(null);
  const carouselItems = [1, 2, 3, 4, 5];

  const renderItem = useCallback(() => (
    <PostCardContainer>
      <PostCard
        title="Como criar uma landing page de alta ..."
        text="Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ..."
      />
    </PostCardContainer>
  ), []);

  const goToEnd = useCallback(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [flatListRef]);

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <SeeMoreContainer onPress={goToEnd}>
          <SeeMoreText>Ver mais</SeeMoreText>
          <MaterialIcons size={25} name="arrow-right" />
        </SeeMoreContainer>
      </TitleContainer>
      <CarouselContainer>
        <FlatList
          ref={flatListRef}
          horizontal
          data={carouselItems}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </CarouselContainer>
    </Container>
  );
}
