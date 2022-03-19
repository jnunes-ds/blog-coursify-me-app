import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(50)}px;
`;

export const Subtitle = styled.Text`
    font-size: ${RFValue(25)}px;
`;