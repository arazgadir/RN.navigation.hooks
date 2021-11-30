import React, {FC} from 'react'
import { View, Text } from 'react-native';
import { styles } from './styles';

export const ProfileScreen: FC = () => {
return (
<View style = {styles.container}>
  <Text> Hello from Profile Screen</Text>
</View>
)
}