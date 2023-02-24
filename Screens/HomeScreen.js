import { View, Text } from 'react-native'
import React from 'react'
import UpdateScreen from './UpdateScreen'
import Feed from './Feed'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Feed' component={Feed} screenOptions={{headerShown: false}} />
        <Stack.Screen name='Update' component={UpdateScreen} />
    </Stack.Navigator>
    
  )
}

export default HomeScreen