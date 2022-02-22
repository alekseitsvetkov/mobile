import React, {useContext} from 'react';

import {StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';
import {radius} from '_app/constants';

export const ImagePlaceholder = ({style, size}) => {
    const {theme} = useContext(AppContext);

    return (
        <View style={style}>
            <View style={[styles(theme).imagePlaceholder]}>
                <Icon name="image" color={theme.gray02} size={size} />
            </View>
        </View>
    );
};

export const s = StyleSheet.create({});

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        imagePlaceholder: {
            borderRadius: radius.base,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.gray01,
        },
    });
