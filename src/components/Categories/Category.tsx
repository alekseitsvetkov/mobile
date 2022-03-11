import React from 'react';

import {Image, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {Text} from '_app/lib/skeetry-ui';
import {ACTIVE_OPACITY} from '_app/constants';

import {s} from './styles';

export const Category = ({item}: TCategoryProps) => {
    const {name, imageUri, locale, localizations} = item;

    return (
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={s.category}>
            <Image source={{uri: imageUri}} resizeMode="cover" style={[s.image, s.absoluteFillObject]} />
            <View style={s.overlay} />
            <Text style={[s.categoryName]}>{name}</Text>
        </TouchableOpacity>
    );
};
