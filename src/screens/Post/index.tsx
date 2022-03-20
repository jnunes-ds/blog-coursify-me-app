/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useMemo, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import RenderHTML from 'react-native-render-html';
import { Dimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import AppLoading from 'expo-app-loading';
import imagePoste from '../../assets/space.png';
import {
  Container,
  Content,
  Body,
  Title,
  Text,
  PostImageContainer,
  PostImage,
} from './styles';
import { RootStackParamList } from '../../routes';
import { Header, Footer } from '~/components';
import { usePosts } from '~/hooks/posts';
import { IPost } from '../../models/Posts';

type NavigationPostProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props{
	postId: number
}

interface ISource {
	html: string;
}

export function Post({ postId }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>({} as IPost);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postTextHTML, setPostTextHTML] = useState<ISource>({} as ISource);
  const navigation = useNavigation<NavigationPostProp>();
  const width = Dimensions.get('window');
  const { getPost } = usePosts();

  useEffect(() => {
    async function onGetPost() {
      const mockedPostId = 4912;
      const tempPost = await getPost(mockedPostId) as unknown as IPost;
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
