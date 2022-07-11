import {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({navigation}) => {

  const [reviews, setReviews] = useState([
    {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'The Elders Scroll: Skyrim', rating: 7, body: 'lorem ipsum', key: '2'},
    {title: 'Workers&Resources Soviet Republic', rating: 5, body: 'lorem ipsum', key: '3'},
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem = {({item})=>(
          <TouchableOpacity onPress={()=> navigation.navigate('Review', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      
      />

    </View>
  )
}

export default Home;

