import React, {useContext} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';

export const HomeScreen = () => {
    const {theme} = useContext(AppContext);

    return (
        <View>
            <Text style={[styles(theme).text]}>New Home</Text>
        </View>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        text: {
            color: theme.text01,
        },
    });
