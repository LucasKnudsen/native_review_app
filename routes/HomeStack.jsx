import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import MenuToggle from '../shared/MenuToggle';
import Header from '../shared/Header'
import { Image } from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'skyblue',
        height: 100,
      },
      headerTitleStyle: {
        fontFamily: 'oxygen-bold',
      },
      headerTintColor: '#333',
      headerBackground: () => (
        <Image source={require('../assets/game_bg.png')} style={{ height: 100 }} />
      )
    }}>
    <Stack.Screen name="Home" component={Home}
      options={({ navigation, route }) => ({
        headerTitle: () => <Header route={route} />,
        headerLeft: () => <MenuToggle navigation={navigation} route={route} />,
      })}
    />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
  </Stack.Navigator>
);

export default HomeStack