import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
	width: 100%;
	margin-top: 46px;
`;

export const TitleContainer = styled.View`
	width: 420px;
	padding-horizontal: 17px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.title};
	font-size: ${RFValue(22)}px;
	color: ${({ theme }) => theme.colors.primary};
	max-width: 60%;
`;

export const SeeMoreContainer = styled.TouchableOpacity`
	flex-direction: row;
`;

export const SeeMoreText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${RFValue(17)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const CarouselContainer = styled.View`
	margin-top: 28px;
`;

export const PostCardContainer = styled.View`
	${() => (Platform.OS === 'ios' ? css`
		margin-right: 20px;
		margin-left: 17px;
	` : css`
			margin-right: 10px;
			margin-left: 27px;
	`)};
`;
