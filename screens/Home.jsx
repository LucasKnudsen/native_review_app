import React, { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import NewReviewForm from '../components/NewReviewForm'

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'An Epic Title!', rating: 3, body: 'A lot of nic lorem ipsum', key: '1' },
    { title: 'An Epic Title 2!', rating: 2, body: 'A lot of nic lorem ipsum', key: '2' },
    { title: 'An Epic Title 3!', rating: 5, body: 'A lot of nic lorem ipsum', key: '3' },
  ])
  const [modalVisible, setModalVisible] = useState(false)

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((state) => {
      return [review, ...state]
    })
    setModalVisible(false)
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalVisible} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalVisible(false)}
            />
            <NewReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalVisible(true)}
      />

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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 40,
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
  }
})