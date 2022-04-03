import React from 'react';

import {Animated} from 'react-native';

import {IAvatarProps} from './types';
import {s} from './styles';

export const Avatar = ({uri, innerStyle}: IAvatarProps) => {
    // TODO: FIX TYPES
    return <Animated.Image style={[s.avatarImage, !!innerStyle && innerStyle]} source={{uri}} />;
};
