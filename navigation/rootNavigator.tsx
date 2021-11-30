import React, { FC } from 'react'
// import { SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigator';

export const RootNavigation: FC = () => {
    return (
                <NavigationContainer  >
                    <StackNavigator />
                </NavigationContainer>
    );
}