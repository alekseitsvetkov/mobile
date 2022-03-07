import React from 'react';

import {Linking, Text, View} from 'react-native';

import {s} from './styles';

export const Preview = () => {
    return (
        <View style={s.container}>
            <Text style={s.title}>{t('about_early_access')}</Text>
            <Text style={s.paragraph}>
                <Text style={s.semibold}>Skeetry</Text>
                {t('about_early_access_1')}
            </Text>
            <Text style={s.paragraph}>{t('about_early_access_2')}</Text>
            <Text style={s.paragraph}>
                {t('about_early_access_3')}
                <Text style={s.semibold} onPress={() => Linking.openURL('https://t.me/alekseytsvetkov')}>
                    @alekseytsvetkov
                </Text>
            </Text>
        </View>
    );
};
