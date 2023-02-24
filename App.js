import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
const App = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'}}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({color, size}) => (
        <Icon name='home' color={color} size={size}/> )}} />

      <Tab.Screen name='Edit' component={CreateScreen} options={{ tabBarLabel: 'Create', tabBarIcon: ({color, size}) => (
        <Icon name='edit' color={color} size={size}/> )}} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App