import React, {useContext} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';

export const FakePlaceholder = () => {
    const {theme} = useContext(AppContext);
    const {t} = useTranslation();

    return (
        <View style={styles(theme).container}>
            <Text>{t('utils:loading')}</Text>
        </View>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: normalize(20),
        },
    });
