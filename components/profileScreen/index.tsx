import React, { FC, useState, useReducer, useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { styles } from './styles';

export const ProfileScreen: FC = () => {
  console.log('ok');
  const colors = ['black', 'white', 'purple', 'green', 'red', 'yellow', 'grey', 'violet', 'blue', 'orange', 'pink', 'brown']

  const [count, setAdd] = useReducer(x => x + 1, 0)
  const [counting, setCounter] = useState(2)
  const [color, setColor] = useState('red')


  const handleClick = () => {
    setAdd()
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (

    <View style={{ ...styles.container, backgroundColor: color }}>
      <Pressable style={styles.click} onPress={() => { handleClick() }}>
        <Text style={styles.text} > this is me  </Text>
      </Pressable>
      <View>
        <Text style={styles.counter}> Count: {count}</Text>
      </View>
      <Pressable style={{ ...styles.click, backgroundColor: 'green' }} onPress={() => { setCounter(counting * 2) }}>
        <Text style={styles.text} > this is me  </Text>
      </Pressable>
      <View>
        <Text style={styles.counter}> Count: {counting}</Text>
      </View>
      <Pressable style={{ ...styles.click, backgroundColor: 'yellow' }} onPress={() => { setCounter(counting / 2) }}>
        <Text style={styles.text} > Reset </Text>
      </Pressable>
    </View>


  )
}


