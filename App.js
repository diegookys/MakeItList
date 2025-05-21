import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterEmailScreen from './screens/RegisterEmailScreen';
import RegisterPasswordScreen from './screens/RegisterPasswordScreen';
import RegisterUsernameScreen from './screens/RegisterUsernameScreen';
import RegisterTermsScreen from './screens/RegisterTermsScreen';
import HomeScreen from './screens/HomeScreen';
import CreateListScreen from './screens/CreateListScreen';
import ShareScreen from './screens/ShareScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterEmail" component={RegisterEmailScreen} />
        <Stack.Screen name="RegisterPassword" component={RegisterPasswordScreen} />
        <Stack.Screen name="RegisterUsername" component={RegisterUsernameScreen} />
        <Stack.Screen name="RegisterTerms" component={RegisterTermsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateList" component={CreateListScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
