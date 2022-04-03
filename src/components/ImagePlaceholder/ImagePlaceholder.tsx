import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {Surface, useTheme} from '_app/design-system';

import {s} from './styles';

// TODO: MOVE TO SKEETRY-UI
export const ImagePlaceholder = ({style, size}) => {
    const {colors} = useTheme();

    return (
        <Surface style={style}>
            <Surface style={[s.imagePlaceholder, {backgroundColor: colors.background}]}>
                <Icon name="image" color={colors.disabled} size={size} />
            </Surface>
        </Surface>
    );
};
