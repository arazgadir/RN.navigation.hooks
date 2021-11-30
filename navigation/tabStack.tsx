import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MainScreen} from '../components/mainScreen/index'
import {SearchScreen} from '../components/searchScreen'
import {MyPlacesScreen} from '../components/myPlacesScreen'
import {ProfileScreen} from '../components/profileScreen'


const Stack = createStackNavigator()

export const StackMainScreen: FC = () => {
    return (
        <Stack.Navigator initialRouteName='MainScreen'>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export const StackSearchScreen: FC = () => {
    return (
        <Stack.Navigator initialRouteName='SearchScreen' >
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export const StackMyPlacesScreen: FC = () => {
    return (
        <Stack.Navigator initialRouteName='MyPlacesScreen'>
            <Stack.Screen name='MyPlacesScreen' component={MyPlacesScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export const StackProfileScreen: FC = () => {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
