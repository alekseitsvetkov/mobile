import React from 'react';

import {Image} from 'react-native';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '_app/utils/dimensions';
import {SafeAreaWrapper} from '_app/components';

export const AvatarScreen = ({route}) => {
    const {image} = route.params;

    return (
        <SafeAreaWrapper center>
            <Image
                source={{
                    uri: image,
                }}
                style={{
                    height: SCREEN_HEIGHT / 2,
                    width: SCREEN_WIDTH,
                }}
            />
        </SafeAreaWrapper>
    );
};
