import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import About from '../screens/About';
import MenuToggle from '../shared/MenuToggle';
import Header from '../shared/Header'
import { Image } from 'react-native';

const Stack = createStackNavigator();

const AboutStack = () => (
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
    }}
  >
    <Stack.Screen name="About" component={About}
      options={({ navigation, route }) => ({
        headerTitle: () => <Header route={route} />,
        headerLeft: () => <MenuToggle navigation={navigation} route={route}
        />
      })} />
  </Stack.Navigator>
);

export default AboutStack