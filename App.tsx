import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { navigationRef } from './RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <Routes />
    </NavigationContainer>
  );
}
