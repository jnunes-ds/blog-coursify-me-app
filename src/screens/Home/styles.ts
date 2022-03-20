import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
		background-color: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
	justify-content: flex-start;
	align-items: center;
`;
