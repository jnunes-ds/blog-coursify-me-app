import React, {
  useRef, useCallback,
} from 'react';
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
import { ICompleteCategories } from '~/models/Categories';
import { IPost } from '~/models/Posts';

interface Props{
	data: ICompleteCategories;
}

interface flatListItem {
	index: number;
	item: IPost;
}

export function PostCardsCategoryGroup({ data } : Props) {
  const flatListRef = useRef<FlatList>(null);

  const renderItem: React.FC<flatListItem> = ({ item }) => (
    <PostCardContainer key={item.id}>
      <PostCard
        title={String(item?.title.rendered) ?? 'título'}
        text={String(item?.excerpt.rendered ?? 'Texto')}
      />
    </PostCardContainer>
  );

  const goToEnd = useCallback(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [flatListRef]);

  return (
    <Container>
      <TitleContainer>
        <Title>{data.name}</Title>
        <SeeMoreContainer onPress={goToEnd}>
          <SeeMoreText>Ver mais</SeeMoreText>
          <MaterialIcons size={25} name="arrow-right" />
        </SeeMoreContainer>
      </TitleContainer>
      <CarouselContainer>
        <FlatList
          ref={flatListRef}
          horizontal
          data={data.posts}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={5}
        />
      </CarouselContainer>
    </Container>
  );
}
