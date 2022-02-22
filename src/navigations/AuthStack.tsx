import React from 'react';

import {useColorScheme} from 'react-native';

import {TAuthStackParamList} from 'types';
import {useTranslation} from 'react-i18next';
import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';

import {
    CodeScreen,
    CredentialsScreen,
    ForgotPasswordScreen,
    LoginScreen,
    PhoneScreen,
    WelcomeScreen,
} from '_app/screens/Auth';
import {colors} from '_app/constants';

const Stack = createStackNavigator<TAuthStackParamList>();
const AuthStack = () => {
    const theme = useColorScheme();
    const {t} = useTranslation();

    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false,
    };

    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen
                component={PhoneScreen}
                name="Phone"
                options={{
                    headerShown: true,
                    headerTintColor: theme === 'dark' ? colors.white : colors.black,
                    headerBackTitle: t('utils:back'),
                    headerTitle: t('auth:phone'),
                }}
            />
            <Stack.Screen
                component={CodeScreen}
                name="Code"
                options={{
                    headerShown: true,
                    headerTintColor: theme === 'dark' ? colors.white : colors.black,
                    headerBackTitle: t('utils:back'),
                    headerTitle: t('auth:code'),
                }}
            />
            <Stack.Screen
                component={CredentialsScreen}
                name="Credentials"
                options={{
                    headerShown: false,
                    headerTintColor: theme === 'dark' ? colors.white : colors.black,
                    headerBackTitle: t('utils:back'),
                    headerTitle: t('auth:сredentials'),
                }}
            />
            <Stack.Screen
                component={ForgotPasswordScreen}
                name="ForgotPassword"
                options={{
                    headerShown: true,
                    headerTintColor: theme === 'dark' ? colors.white : colors.black,
                    headerBackTitle: t('utils:back'),
                    headerTitle: t('auth:forgot_password'),
                }}
            />
            <Stack.Screen
                component={WelcomeScreen}
                name="Welcome"
                options={{
                    headerShown: false,
                    headerTintColor: theme === 'dark' ? colors.white : colors.black,
                    headerBackTitle: t('utils:back'),
                    headerTitle: t('auth:welcome'),
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
