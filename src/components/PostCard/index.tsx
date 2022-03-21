/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-use-before-define */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '~/assets/logo.png';

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
import BlogService from '~/services/blog.service';
import { IMedia } from '~/models/Media';

interface Props{
	postId: number;
	mediaId: number;
	title: string;
	text: string;
}

type NavigationPostCardProp = StackNavigationProp<RootStackParamList, 'Post'>;

export function PostCard({
  postId, mediaId, title, text,
} : Props) {
  const [mediaSizeUrl, setMediaSizeUrl] = useState<string>('');
  const navigation = useNavigation<NavigationPostCardProp>();
  const TextReplaced = text.replace('<p>', '');

  useEffect(() => {
    const getMediaSizeUrl = async () => {
      const media = await getCardMedia();
      if (media && media.media_details) {
        const { sizes } = media.media_details;
        if (sizes.thumbnail) {
          setMediaSizeUrl(sizes.thumbnail.source_url);
          return;
        }
        if (sizes.medium) {
          setMediaSizeUrl(sizes.medium.source_url);
          return;
        }
        if (sizes.medium_large) {
          setMediaSizeUrl(sizes.medium_large.source_url);
          return;
        }
        if (sizes.large) {
          setMediaSizeUrl(sizes.large.source_url);
          return;
        }
        if (sizes['post-thumbnail']) {
          setMediaSizeUrl(sizes['post-thumbnail'].source_url);
          return;
        }
        if (sizes.full) {
          setMediaSizeUrl(sizes.full.source_url);
        }
      }
    };
    getMediaSizeUrl();
  }, []);

  const getCardMedia = async (): Promise<IMedia|void> => {
    try {
      const response = await BlogService.getMediaById(mediaId);
      if (response) return response.data as IMedia;
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleGoToPost = useCallback(() => navigation.navigate('Post', { postId }), [navigation]);

  return (
    <Container>
      <CardImageContainer>
        {
					mediaSizeUrl
					  ? (
							<CardImage source={{
							  uri: mediaSizeUrl,
							}}
							/>
					  ) : (
  						<CardImage resizeMode="contain" source={Logo} />
					  )
				}
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
