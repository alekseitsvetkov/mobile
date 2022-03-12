import React from 'react';

import {Image} from 'react-native';

import {useTheme} from '_app/lib/skeetry-ui';

import {s} from './styles';

export const Avatar = ({src, name, small}: TAvatarProps) => {
    const {colors} = useTheme();

    return (
        <Image
            style={[s.avatarImage, small && {width: 50, height: 50}, {borderColor: colors.background}]}
            source={{uri: src}}
        />
    );
};
