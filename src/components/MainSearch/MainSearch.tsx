import React, {FC} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {SearchNormal1, Setting4} from 'iconsax-react-native';

import {ACTIVE_OPACITY, colors} from '_app/constants';

import {s} from './styles';

export const MainSearch: FC = () => {
    return (
        <View style={s.container}>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <SearchNormal1 size={20} variant="Outline" color={colors.gray500} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                {/* TODO: NEED TO LOCALIZE WHEN EXPO-LOCALIZATION IS SET UP */}
                <Text style={s.text}>Where do you want to go?</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <Setting4 size={20} variant="Outline" color={colors.gray500} />
            </TouchableOpacity>
        </View>
    );
};
