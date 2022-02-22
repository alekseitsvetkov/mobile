import React, {useContext} from 'react';

import {Linking, StyleSheet, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';

import {s} from './styles';

export const Preview = () => {
    const {t} = useTranslation();
    const {theme} = useContext(AppContext);

    return (
        <View style={[s.container, styles(theme).container]}>
            <Text style={[s.title, styles(theme).text]}>{t('utils:about_early_access')}</Text>
            <Text style={[s.paragraph, styles(theme).text]}>
                <Text style={s.semibold}>Skeetry</Text>
                {t('utils:about_early_access_1')}
            </Text>
            <Text style={[s.paragraph, styles(theme).text]}>{t('utils:about_early_access_2')}</Text>
            <Text style={[s.paragraph, styles(theme).text]}>
                {t('utils:about_early_access_3')}
                <Text style={s.semibold} onPress={() => Linking.openURL('https://t.me/alekseytsvetkov')}>
                    @alekseytsvetkov
                </Text>
            </Text>
        </View>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            backgroundColor: theme.gray01,
        },
        text: {
            color: theme.text01,
        },
    });
