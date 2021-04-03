import React, { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'An Epic Title!', rating: 3, body: 'A lot of nic lorem ipsum', key: '1' },
    { title: 'An Epic Title 2!', rating: 2, body: 'A lot of nic lorem ipsum', key: '2' },
    { title: 'An Epic Title 3!', rating: 5, body: 'A lot of nic lorem ipsum', key: '3' },
  ])


  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
