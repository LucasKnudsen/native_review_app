import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = ({ route }) => {
  const { name } = route

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/heart_logo.png')} />
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'oxygen-bold'
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 10
  }
})
