import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
	flex-direction: row;
	width: 100%;
	height: ${RFValue(84)}px;
	border-bottom-color: ${({ theme }) => theme.colors.shadow};
	border-bottom-width: ${RFValue(3)}px;
	elevation: ${RFValue(6)}px;
	shadow-color: ${({ theme }) => theme.colors.shadow};
	justify-content: space-between;
	align-items: flex-end;
	padding-horizontal: 17px;	
	padding-vertical: 7px;
`;

export const LogoContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 169px;
	height: 50px;
`;

export const Logo = styled.ImageBackground`
	width: 100%;
	height: 100%;
	
`;

export const MenuButtonContainer = styled.TouchableOpacity`
	width: 37px;
	height: 37px;
	border-radius: 35px;
	background-color: ${({ theme }) => theme.colors.primary_light};
	justify-content: center;
	align-items: center;
`;

export const MenuButtonSvg = styled(Feather).attrs({
  name: 'menu',
  size: 21,
  color: '#FFFFFF',
})``;
