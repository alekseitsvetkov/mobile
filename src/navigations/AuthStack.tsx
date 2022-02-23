import React from 'react';

import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '_app/screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false,
    };

    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen component={LoginScreen} name="Login" />
        </Stack.Navigator>
    );
};

export default AuthStack;
