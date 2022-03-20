import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  Post,
} from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Post: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
