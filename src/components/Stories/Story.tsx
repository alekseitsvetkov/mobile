import React from 'react';

import {Image, TouchableOpacity} from 'react-native';

import {navigation} from '_app/services/navigations';
import {colors} from '_app/constants';

import {s} from './styles';

export const Story = ({url, viewed}: TStoryProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[s.story, viewed && {borderColor: colors.gray200}]}
            onPress={() => {
                navigation.navigate('Stories');
            }}>
            <Image
                style={s.storyImage}
                source={{
                    uri: url,
                }}
            />
        </TouchableOpacity>
    );
};
