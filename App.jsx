import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeStack from "./routes/HomeStack";
import AboutStack from "./routes/AboutStack";

const getFonts = () => Font.loadAsync({
  'oxygen-regular': require('./assets/fonts/Oxygen-Regular.ttf'),
  'oxygen-bold': require('./assets/fonts/Oxygen-Bold.ttf'),
  'oxygen-light': require('./assets/fonts/Oxygen-Light.ttf'),
})

const Drawer = createDrawerNavigator()

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          drawerType="slide"
          drawerContentOptions={{
            labelStyle: 'oxygen-bold'
          }}
        >
          <Drawer.Screen name='Home' component={HomeStack} />
          <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

export default App
