import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import About from '../screens/About';
import MenuToggle from '../shared/MenuToggle';

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
      headerTintColor: '#333'
    }}
  >
    <Stack.Screen name="About" component={About}
      options={({ navigation, route }) => ({ title: 'About', headerLeft: () => <MenuToggle navigation={navigation} route={route} /> })} />
  </Stack.Navigator>
);

export default AboutStack