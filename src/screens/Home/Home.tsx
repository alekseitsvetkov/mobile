import React, {useContext} from 'react';

import {StyleSheet, Text} from 'react-native';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';
import {colors} from '_app/constants';
import {MainContainer} from '_app/components';

export const HomeScreen = () => {
    const {theme} = useContext(AppContext);

    return (
        <MainContainer safeAreaDisabled>
            <Text style={styles(theme).text}>New Home</Text>
        </MainContainer>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.white,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
        },
        text: {
            color: theme.text01,
        },
    });
