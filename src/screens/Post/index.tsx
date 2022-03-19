import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Subtitle,
    Title
} from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';

interface homeScreenProp extends StackNavigationProp<RootStackParamList, 'Home'>{};
interface Props{
    title: string;
}

export function Post(){
    const navigation = useNavigation<homeScreenProp>();

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')} >
                <Title> Hello World! </Title>
                <Subtitle>From Post screen</Subtitle>
            </TouchableWithoutFeedback>
        </Container>
    );
}