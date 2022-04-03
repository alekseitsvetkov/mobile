import React from 'react';

import {colord} from 'colord';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Visited, Want} from '_app/screens';
import {useTheme} from '_app/design-system';

import {s} from './styles';

const Tab = createMaterialTopTabNavigator();

export const ProfileTabs = () => {
    const {colors} = useTheme();

    const seperatorColor = colord(colors.placeholder).alpha(0.1).toHex();

    const screenOptions = {
        tabBarStyle: [s.tabBarStyle, {backgroundColor: colors.surface, borderBottomColor: seperatorColor}],
        tabBarLabelStyle: s.tabBarLabelStyle,
        tabBarItemStyle: s.tabBarItemStyle,
        tabBarIndicatorStyle: {marginHorizontal: 16, backgroundColor: colors.onSurface},
        tabBarActiveTintColor: colors.onSurface,
        tabBarInactiveTintColor: colors.placeholder,
    };

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Want" component={Want} />
            <Tab.Screen name="Visited" component={Visited} />
        </Tab.Navigator>
    );
};
