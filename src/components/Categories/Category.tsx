import React from 'react';

import {Image, Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {navigation} from '_app/services/navigations';
import {ACTIVE_OPACITY} from '_app/constants';

import {s} from './styles';

export const Category = ({item}: TCategoryProps) => {
    const {name, imageUri, locale, localizations} = item;

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('ItemsByCategory', {
                    item,
                })
            }
            activeOpacity={ACTIVE_OPACITY}
            style={s.category}>
            <Image source={{uri: imageUri}} resizeMode="cover" style={[s.image, s.absoluteFillObject]} />
            <View style={s.overlay} />
            <Text style={[s.categoryName]}>Categories</Text>
        </TouchableOpacity>
    );
};
