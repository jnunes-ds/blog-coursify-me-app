import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../routes';

import {
    Container,
    Subtitle,
    Title
} from './styles'

interface homeScreenProp extends StackNavigationProp<RootStackParamList, 'Home'>{};

export function Home(){
    const navigation = useNavigation<homeScreenProp>();

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Post')}>
                <Title> Hello World! </Title>
                <Subtitle>From Home screen</Subtitle>
            </TouchableWithoutFeedback>
        </Container>
    );
}