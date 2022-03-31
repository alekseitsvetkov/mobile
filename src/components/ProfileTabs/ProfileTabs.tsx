import React from 'react';

import {Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Surface} from '_app/design-system';

// import {MyTabBar} from '../MyTabBar';

const Tab = createMaterialTopTabNavigator();

export const ProfileTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Want" component={Want} />
            <Tab.Screen name="Visited" component={Visited} />
        </Tab.Navigator>
    );
};

const Want = () => {
    return (
        <Surface style={{height: '100%'}}>
            {new Array(30).fill(0).map((_, index) => (
                <Text key={index}>Want</Text>
            ))}
        </Surface>
    );
};

const Visited = () => {
    return (
        <Surface style={{height: '100%'}}>
            {new Array(30).fill(0).map((_, index) => (
                <Text key={index}>Visited</Text>
            ))}
        </Surface>
    );
};
