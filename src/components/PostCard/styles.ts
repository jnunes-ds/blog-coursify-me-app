import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
	width: 235px;
	height: 325px;
	border-radius: 12px;
	border-right-width: 1px;
	border-bottom-width: 2px;
	border-color: ${({ theme }) => theme.colors.shadow};
	background-color: ${({ theme }) => theme.colors.background};
`;

export const CardImageContainer = styled.View`
	width: 100%;
	height: 103px;
	border-top-right-radius: 12px;
	border-top-left-radius: 12px;
	overflow: hidden;
`;

export const CardImage = styled(FastImage)`
	width: 100%;
	height: 100%;
`;

export const TextsContainer = styled.View`
	padding-horizontal: 9px;
	padding-bottom: 35px;
`;

export const TitleContainer = styled.View`
	margin-vertical: 15px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: ${RFValue(17)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${RFValue(15)}px;
	color: ${({ theme }) => theme.colors.text_light};
	margin-bottom: 15px;
`;

export const LinkToPost = styled.TouchableWithoutFeedback``;

export const LinkToPostLabel = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.tertiary};
`;
