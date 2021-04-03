import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/Card'

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params.item;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
        <Text>{body}</Text>
      </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({

})