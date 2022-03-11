import React, {useEffect, useState} from 'react';

import {Easing} from 'react-native';

import {enableScreens} from 'react-native-screens';
import i18n from 'i18n-js';
import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';
import {DarkTheme, DefaultTheme, InitialState, NavigationContainer} from '@react-navigation/native';

import {loadPersistence, savePersistence} from '_app/utils';
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
    const [isReady, setIsReady] = useState(false);
    const [initialState, setInitialState] = useState<InitialState | undefined>();

    useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await loadPersistence();
                const state = JSON.parse(savedStateString || '');

                setInitialState(state);
            } catch (e) {
                // ignore error
            } finally {
                setIsReady(true);
            }
        };

        if (!isReady) {
            restoreState();
        }
    }, [isReady]);

    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        presentation: 'transparentModal',
    };

    if (!isReady) {
        return null;
    }

    return (
        <NavigationContainer
            initialState={initialState}
            onStateChange={(state) => savePersistence(JSON.stringify(state))}
            theme={DarkTheme}
            ref={navigationRef}>
            <RootStack.Navigator initialRouteName="Auth">
                <RootStack.Screen name="Auth" component={AuthStack} options={navigationOptions} />
                <RootStack.Screen name="RootTab" component={RootTab} options={navigationOptions} />
                <RootStack.Screen
                    options={{
                        //...TransitionPresets.ModalTransition,
                        headerShown: true,
                        headerTintColor: '#ffffff',
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
                        headerTintColor: '#ffffff',
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
                        headerTintColor: '#ffffff',
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
                        headerTintColor: '#ffffff',
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
                        headerTintColor: '#ffffff',
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
