import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../Screens/SplashScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import AuthenticationScreen from '../Screens/AuthenticationScreen'
import HomeScreen from '../Screens/HomeScreen' 
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName='Splash'
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="AuthScreen" component={AuthenticationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

