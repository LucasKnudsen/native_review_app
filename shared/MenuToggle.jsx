import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const MenuToggle = ({ navigation }) => {

  return (
    <MaterialIcons name="menu" size={28} onPress={() => { navigation.toggleDrawer() }} style={styles.icon} />
  )
}

export default MenuToggle

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15
  }
})
