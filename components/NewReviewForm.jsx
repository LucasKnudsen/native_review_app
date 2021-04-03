import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, } from 'react-native'
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik';
import * as yup from 'yup';
import CustomButton from '../shared/CustomButton'

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('name-of-test', 'Feedback Message', (value) => {
      return Number(value) < 6 && Number(value) > 0
    })
})

const NewReviewForm = ({ addReview }) => {
  return (

    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm()
          addReview(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              multiline minHeight={80}
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

            <CustomButton text='Submit review' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default NewReviewForm

const styles = StyleSheet.create({})
