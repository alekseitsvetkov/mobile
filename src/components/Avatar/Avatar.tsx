import React, {useContext} from 'react';

import {Image} from 'react-native';

import {AppContext} from '_app/context';

import {s} from './styles';

export const Avatar = ({src, username, small}: TAvatarProps) => {
    const {theme} = useContext(AppContext);

    const background = theme.text01.split('#')[1];
    const color = theme.text02.split('#')[1];

    // TODO: own function
    const placeholderImageMock = `https://eu.ui-avatars.com/api/?background=${background}&color=${color}&length=1&name=${username}`;

    if (!src) {
        return (
            <Image
                style={[s.avatarImage, small && {width: 50, height: 50}]}
                source={{
                    uri: placeholderImageMock,
                }}
            />
        );
    }

    return <Image style={[s.avatarImage, small && {width: 50, height: 50}]} source={{uri: src}} />;
};
