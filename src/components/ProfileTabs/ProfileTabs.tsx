import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MainContainer} from '../MainContainer';

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
        <View style={{backgroundColor: 'green', height: '100%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {new Array(30).fill(0).map((_, index) => (
                    <Text key={index}>Want</Text>
                ))}
            </ScrollView>
        </View>
    );
};

const Visited = () => {
    return (
        <View style={{backgroundColor: 'red', height: '100%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {new Array(30).fill(0).map((_, index) => (
                    <Text key={index}>Visited</Text>
                ))}
            </ScrollView>
        </View>
    );
};
