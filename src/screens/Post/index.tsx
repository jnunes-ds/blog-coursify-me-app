/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';

import RenderHTML from 'react-native-render-html';
import AppLoading from 'expo-app-loading';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Content,
  Body,
  Title,
} from './styles';
import { Header, Footer } from '~/components';
import { usePosts } from '~/hooks/posts';
import { IPost } from '../../models/Posts';

interface Params{
	postId: number
}

interface ISource {
	html: string;
}

export function Post() {
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>({} as IPost);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postTextHTML, setPostTextHTML] = useState<ISource>({} as ISource);
  const { getPost } = usePosts();
  const route = useRoute();
  const { postId } = route.params as Params;

  useEffect(() => {
    async function onGetPost() {
      const tempPost = await getPost(postId) as unknown as IPost;
      if (tempPost) setPost(tempPost);
    }
    onGetPost();
  }, []);

  useEffect(() => {
    const getPostInformations = () => {
      if (!post || post.id === undefined) return;
      const source = {
        html: post.content.rendered,
      };
      setPostTextHTML(source);
      setPostTitle(post.title.rendered);
      setLoading(false);
    };
    getPostInformations();
  }, [post]);

  return (
    <Container>
      <Header haveABackButton />
      {
				loading
				  ? <AppLoading />
				  : (
						<Content>
							<Body>
								<Title>{postTitle}</Title>
								<RenderHTML
									contentWidth={450}
									source={postTextHTML}
								/>
							</Body>
							<Footer />
						</Content>
				  )
			}
    </Container>
  );
}
