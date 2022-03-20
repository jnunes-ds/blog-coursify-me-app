import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.ScrollView``;

export const Body = styled.View`
	padding-top: 46px;
	padding-horizontal: 26px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.colors.primary};
	text-align: justify;
	margin-bottom: 45px;
`;

export const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${RFValue(17)}px;
	color: ${({ theme }) => theme.colors.text};
	/* margin-top: 35px; */
	text-align: justify;
	margin-bottom: 45px;
`;

export const PostImageContainer = styled.View`
	width: 100%;
	margin-bottom: 46px;
`;

export const PostImage = styled.ImageBackground`
	width: 100%;
	height: 244px;
`;
