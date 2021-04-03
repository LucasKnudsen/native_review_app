import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/Card'

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params.item;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})