import React, { FC, useState } from 'react'
import { View, Text } from 'react-native';
import { styles } from './styles';
import Animated from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler';


const { event, Value, cond, eq } = Animated

export const MyPlacesScreen: FC = () => {
  const [state, setState] = useState(new Value(-1));
  const onStateChange = event([
    {
      nativeEvent: {
        state: state
      }
    }
  ])

  const _opacity = cond(eq(state, State.BEGAN), 
  0.2, 1)
  return (
    <View style={styles.container}>
      <TapGestureHandler>
        <Animated.View style={[styles.box,
        {opacity: _opacity }
        ]}>

        </Animated.View>
      </TapGestureHandler>
    </View>
  )
}