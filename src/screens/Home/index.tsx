/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { Header, PostCardsCategoryGroup, Footer } from '~/components';

import { usePosts } from '~/hooks/posts';
import {
  Container, Content,
} from './styles';

export function Home() {
  const { getAllPosts, allCategories } = usePosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {
					allCategories.map((item) => (<PostCardsCategoryGroup key={item.id} data={item} />))
				}
				{
					!!allCategories.length
        && <Footer />
				}
      </Content>
    </Container>
  );
}
