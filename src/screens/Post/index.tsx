/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';

import RenderHTML from 'react-native-render-html';
import AppLoading from 'expo-app-loading';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
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
  const theme = useTheme();
  const { text } = theme.colors;

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
        html: `
					<!DOCTYPE html>
					<html>
					<head>
							<meta charset="UTF-8">
							<meta http-equiv="X-UA-Compatible" content="IE=edge">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<style>
									body {
										color: ${text}
									}
							</style>
							<title>Document</title>
					</head>
					<body>
							${
  post.content.rendered
    .replace(/<b/g, `<b style="color:${text}"`)
    .replace(/<l/g, `<b style="color:"${text}"`)
    .replace(/<span/g, `<span style="color:${text}"`)
    .replace(/<strong/g, `<strong style="color:${text}"`)
    .replace(/<li/g, `<li style="color:${text}"`)
}
					</body>
					</html>
				`,
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
