import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


const Review = ({navigation}) => {

  return (
    <View style={globalStyles.container}>
      <Text>Game Title: {navigation.getParam('title')}</Text>
      <Text>Review: {navigation.getParam('body')}</Text>
      <Text>Rating: {navigation.getParam('rating')}</Text>
    </View>
  )
}

export default Review;

