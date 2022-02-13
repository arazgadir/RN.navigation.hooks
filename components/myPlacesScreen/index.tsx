import React, { FC, useState, useCallback } from 'react'
import { View, Text, ScrollView, Image, RefreshControl } from 'react-native';
import { styles } from './styles';
import Animated from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import useRefresh from '../../hoooks/useRefresh';


export const MyPlacesScreen: FC = () => {

  

  const [todos, setTodos] = useState([]);
  const refresh = useRefresh(false)

  const getTodos = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(json => setTodos(json))
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <ScrollView style={styles.container}
    refreshControl= {
      <RefreshControl
       {...refresh}
      />
    }
    >
      {todos.map(todos =>
        <View style={styles.todosContainer}>
          <View style={styles.image}>
            <Image style={styles.imageIn} source={{ uri: todos?.image_url }}></Image>
          </View>
          <View key={todos.id} style={styles.schedule}>
            <Text style={styles.name}>{todos.name}</Text>
            <Text>{todos.description}</Text>
          </View>
        </View>
      )
      }
    </ScrollView>


  )
}