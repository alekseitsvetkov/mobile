import React, {FC} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {SearchNormal1, Setting4} from 'iconsax-react-native';
import i18n from 'i18n-js';

import {navigation} from '_app/services/navigations';
import {ACTIVE_OPACITY} from '_app/constants';

import {s} from './styles';

export const MainSearch: FC = () => {
    return (
        <View style={s.container}>
            <TouchableOpacity
                style={s.searchContainer}
                activeOpacity={ACTIVE_OPACITY}
                onPress={() => {
                    navigation.navigate('Search');
                }}>
                <SearchNormal1 size={20} variant="Outline" color={'#6B7280'} />
                <Text style={s.text}>{i18n.t('where_do_you_want_to_go')}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <Setting4 size={20} variant="Outline" color={'#6B7280'} />
            </TouchableOpacity>
        </View>
    );
};
