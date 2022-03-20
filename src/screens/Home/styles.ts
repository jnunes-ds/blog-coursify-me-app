import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
		background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
	min-width: 100%;
`;

export const Body = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
	justify-content: flex-start;
	align-items: center;
`;
