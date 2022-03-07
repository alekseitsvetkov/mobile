import React from 'react';

import {Image} from 'react-native';

import {s} from './styles';

export const Avatar = ({src, name, small}: TAvatarProps) => {
    return <Image style={[s.avatarImage, small && {width: 50, height: 50}]} source={{uri: src}} />;
};
