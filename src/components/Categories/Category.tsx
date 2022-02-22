import React from 'react';

import {Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {withLocalization} from '_app/utils/helpers';
import {navigation} from '_app/services/navigations';
import {tBase} from '_app/constants';

import {s} from './styles';

export const Category = ({item}: TCategoryProps) => {
    const {name, emoji, locale, localizations} = item;

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('ItemsByCategory', {
                    item,
                })
            }
            activeOpacity={0.8}
            style={s.category}>
            <View style={s.categoryEmoji}>
                <Text>{emoji}</Text>
            </View>
            <Text style={tBase}>{withLocalization('name', name, locale, localizations)}</Text>
        </TouchableOpacity>
    );
};
