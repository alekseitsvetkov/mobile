import React from 'react';

import {Text} from 'react-native';

import {colord} from 'colord';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Surface, useTheme} from '_app/design-system';

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

const Want = () => {
    return (
        <Surface style={s.container}>
            {new Array(30).fill(0).map((_, index) => (
                <Text key={index}>Want</Text>
            ))}
        </Surface>
    );
};

const Visited = () => {
    return (
        <Surface style={s.container}>
            {new Array(30).fill(0).map((_, index) => (
                <Text key={index}>Visited</Text>
            ))}
        </Surface>
    );
};
