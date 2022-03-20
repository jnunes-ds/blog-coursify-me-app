import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	width: 100%;
	height: 222px;
	background-color: ${({ theme }) => theme.colors.primary_footer};
	justify-content: space-around;
	align-items: center;
	margin-top: 46px;
`;

export const LogoContainer = styled.View`
	width: 172px;
	height: 45px;
`;

export const Logo = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.background};
	text-align: center;
	padding-horizontal: 39px;
`;

export const Button = styled.TouchableOpacity`
	width: 216px;
	height: 44px;
	border-radius: 60px;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ButtonLabel = styled.Text`
	font-family: ${({ theme }) => theme.fonts.text};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.background};
`;
