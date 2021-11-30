import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
// import { View} from 'react-native';
import React, { FC } from 'react'
import { MainIcon } from '../instruments/svg/mainTab'
import { StackMainScreen, StackMyPlacesScreen, StackProfileScreen, StackSearchScreen } from './tabStack'
import {SearchIcon} from '../instruments/svg/searchTab';
import {MyPlacesIcon} from '../instruments/svg/myPlaces';
import {ProfileIcon} from '../instruments/svg/profile';

const Tab = createBottomTabNavigator()

export const TabNavigator: FC = () => {
    return (
       
        <Tab.Navigator
        
        >
            <Tab.Screen
                name='Main'
                component={StackMainScreen}
                 options = {{ 
                     headerShown: false,
                      tabBarIcon: ({focused}) => <MainIcon color = {focused ? 'red' : 'blue'}/>
                 }}
            />
            <Tab.Screen
                name='Search'
                component={StackSearchScreen}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({focused}) => <SearchIcon color = {focused ? 'red' : 'blue'}/>
                }}
            />
            <Tab.Screen
                name='My Places'
                component={StackMyPlacesScreen}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({focused}) => <MyPlacesIcon color = {focused ? 'red' : 'blue'}  />
                }}
            />
            <Tab.Screen
                name='Profile'
                component={StackProfileScreen}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({focused}) => <ProfileIcon color = {focused ? 'red' : 'blue'}/>
                }}
            />
        </Tab.Navigator>
    )
}