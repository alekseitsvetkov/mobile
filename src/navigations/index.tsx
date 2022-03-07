import React from 'react';

import {Easing, useColorScheme} from 'react-native';

import {enableScreens} from 'react-native-screens';
import i18n from 'i18n-js';
import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '_app/services/navigations';
import {CardScreen, GalleryScreen, MapScreen, ProfileUserScreen, SearchScreen} from '_app/screens';
import CloseModal from '_app/components/CloseModal/CloseModal';

import RootTab from './RootTab';
import AuthStack from './AuthStack';

// TODO: move to global place?
enableScreens();

// TODO: type when done
const RootStack = createStackNavigator();

const options = {
    gestureEnabled: false,
    headerBackTitleVisible: false,
    transitionSpec: {
        open: {
            animation: 'timing',
            config: {duration: 300, easing: Easing.inOut(Easing.ease)},
        },
        close: {
            animation: 'timing',
            config: {duration: 300, easing: Easing.inOut(Easing.ease)},
        },
    },
    cardStyleInterpolator: ({current: {progress}}) => {
        return {
            cardStyle: {
                opacity: progress,
            },
        };
    },
};

const Index = () => {
    const scheme = useColorScheme();

    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
    };
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator initialRouteName="Auth">
                <RootStack.Screen name="Auth" component={AuthStack} options={navigationOptions} />
                <RootStack.Screen name="RootTab" component={RootTab} options={navigationOptions} />
                <RootStack.Screen
                    options={{
                        //...TransitionPresets.ModalTransition,
                        headerShown: true,
                        headerTintColor: scheme === 'dark' ? '#000000' : '#ffffff',
                        headerTransparent: true,
                        headerBackTitle: i18n.t('back'),
                        title: i18n.t('search'),
                        presentation: 'transparentModal',
                        ...options,
                    }}
                    name="Search"
                    component={SearchScreen}
                />
                <RootStack.Screen
                    options={({route}) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerTintColor: scheme === 'dark' ? '#ffffff' : '#000000',
                        title: '',
                        headerBackTitle: i18n.t('back'),
                        ...options,
                        headerLeft: () => <CloseModal />,
                    })}
                    name="Map"
                    component={MapScreen}
                />
                <RootStack.Screen
                    options={({route}) => ({
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerTintColor: scheme === 'dark' ? '#ffffff' : '#000000',
                        title: '',
                        headerBackTitle: i18n.t('back'),
                        presentation: 'modal',
                        ...options,
                        headerLeft: () => <CloseModal />,
                    })}
                    name="CardScreen"
                    component={CardScreen}
                />
                <RootStack.Screen
                    options={({route}) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: `${route.params.user.name}`,
                        headerTintColor: scheme === 'dark' ? '#000000' : '#ffffff',
                        headerBackTitle: i18n.t('back'),
                        presentation: 'card',
                        ...options,
                    })}
                    name="ProfileUser"
                    component={ProfileUserScreen}
                />
                <RootStack.Screen
                    options={({route}) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerTintColor: scheme === 'dark' ? '#ffffff' : '#000000',
                        title: '',
                        headerBackTitle: i18n.t('back'),
                        ...options,
                        headerLeft: () => <CloseModal />,
                    })}
                    name="Gallery"
                    component={GalleryScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Index;
