/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { Header, PostCardsCategoryGroup, Footer } from '~/components';

import { usePosts } from '~/hooks/posts';
import {
  Container, Content,
} from './styles';

export function Home() {
  const flatListRef = useRef<FlatList>(null);
  const { getAllPosts, allCategories } = usePosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      <Header />
      {/* <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item?.id}
        data={allCategories}
        renderItem={(item) => (<PostCardsCategoryGroup data={item} />)}
        ListFooterComponent={Footer}
        initialNumToRender={5}
      /> */}
      <Content>
        {
					allCategories.map((item, index) => (<PostCardsCategoryGroup key={index} data={item} />))
				}
        <Footer />
      </Content>
    </Container>
  );
}
