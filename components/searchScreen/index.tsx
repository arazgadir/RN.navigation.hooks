import React, { FC, useState } from 'react'
import { View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import useInput from '../../hoooks/useInput';
import { styles } from './styles';


export const SearchScreen: FC = () => {
  const username = useInput('')
  const password = useInput('')
  return (

    <View style={styles.container}>
      <Text> Hello from Search Screen </Text>
      <TextInput
       {...username}
        style={styles.textInput}
        placeholder="username"
      ></TextInput>
      <TextInput
       {...password}
        style={styles.textInput}
        placeholder="password"
      ></TextInput>
      <Pressable style={styles.button} onPress={() => console.log('username: ', username.value, 'password: ', password.value)}>
        <Text > Press me</Text>
      </Pressable>
    </View>

  )
}