import React from 'react';

import {TRootStackParamList} from 'types';
import {MaterialTopTabNavigationOptions, createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeTab from './HomeTab';

const RootTab = createMaterialTopTabNavigator<TRootStackParamList>();

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
            {/* <RootTab.Screen name="Direct" component={Direct} />  */}
        </RootTab.Navigator>
    );
};

export default Index;
