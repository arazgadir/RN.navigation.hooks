import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { TabNavigator } from './tabNavigator';



const Stack = createStackNavigator();
const isDataUpload = true
const isRegistration = true

export const StackNavigator: FC = () => {
    return (
        
        <Stack.Navigator initialRouteName='LaunchAppScreen' 
        
          >
            {isDataUpload ?
                isRegistration ?
                    <>
                        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }}/>
                    </>
                    :
                    <>
                        <Stack.Screen name='AuthorizationScreen' component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name='RegistrationScreen' component={TabNavigator} options={{ headerShown: false }} />
                    </>
                :
                <Stack.Screen name='LaunchAppScreen' component={TabNavigator} options={{ headerShown: false }} />
            }
        </Stack.Navigator>

    )
}

