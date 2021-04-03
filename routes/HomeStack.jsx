import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import MenuToggle from '../shared/MenuToggle';

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
      headerTintColor: '#333'
    }}>
    <Stack.Screen name="Home" component={Home}
      options={({ navigation, route }) => ({ title: 'GameZone', headerLeft: () => <MenuToggle navigation={navigation} route={route} /> })}
    />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
  </Stack.Navigator>
);

export default HomeStack