import React from 'react';

import {MaterialTopTabNavigationOptions, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeTab from './HomeTab';

const RootTab = createMaterialTopTabNavigator();

const Index = (): JSX.Element => {
    const screenOptions: MaterialTopTabNavigationOptions = {
        tabBarIndicatorContainerStyle: {
            display: 'none',
        },
        tabBarStyle: {
            display: 'none',
        },
    };

    return (
        <RootTab.Navigator initialRouteName="HomeTab" screenOptions={screenOptions}>
            <RootTab.Screen name="HomeTab" component={HomeTab} />
        </RootTab.Navigator>
    );
};

export default Index;
