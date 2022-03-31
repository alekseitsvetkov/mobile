import React, {useCallback} from 'react';

import {Image, ImageProps, StyleSheet, View} from 'react-native';

import _ from 'lodash';

export enum FaderPosition {
    /**
     * @deprecated please use START instead
     */
    LEFT = 'LEFT',
    START = 'START',
    /**
     * @deprecated please use END instead
     */
    RIGHT = 'RIGHT',
    END = 'END',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
}

export type FaderProps = ImageProps & {
    /**
     * Whether the fader is visible (default is true)
     */
    visible?: boolean;
    /**
     * The position of the fader (the image is different), defaults to Fader.position.END
     */
    position?: FaderPosition;
    /**
     * Set to change from the default size (50) of the fade view.
     */
    size?: number;
    /**
     * Change the default (white) tint color of the fade view.
     */
    tintColor?: string;
};

const DEFAULT_FADE_SIZE = 50;

/**
 * @description: A gradient fading overlay to render on top of overflowing content (like scroll component)
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FaderScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Fader/Fader.gif?raw=true
 */
function Fader(props: FaderProps) {
    const getFadeSize = useCallback(() => {
        return props.size || DEFAULT_FADE_SIZE;
    }, [props.size]);

    const fadeSize = getFadeSize();
    const getStyles = useCallback(() => {
        const position = props.position || FaderPosition.END;
        let containerStyle, imageStyle, imageSource;
        switch (position) {
            case FaderPosition.LEFT:
            case FaderPosition.START:
                containerStyle = {...staticStyles.containerLeft, width: fadeSize};
                imageStyle = {height: '100%', width: fadeSize};
                break;
            case FaderPosition.RIGHT:
            case FaderPosition.END:
                containerStyle = {...staticStyles.containerRight, width: fadeSize};
                imageStyle = {height: '100%', width: fadeSize};
                break;
            case FaderPosition.TOP:
                containerStyle = {...staticStyles.containerTop, height: fadeSize};
                imageStyle = {height: fadeSize, width: '100%'};
                break;
            case FaderPosition.BOTTOM:
                containerStyle = {
                    ...staticStyles.containerBottom,
                    height: fadeSize,
                };
                imageStyle = {height: fadeSize, width: '100%'};
                break;
        }

        return {
            containerStyle,
            imageStyle,
            imageSource,
        };
    }, [fadeSize, props.position]);

    const styles = getStyles();

    return (
        <View pointerEvents={'none'} style={styles.containerStyle}>
            {(props.visible || _.isUndefined(props.visible)) && (
                <Image source={styles.imageSource} style={styles.imageStyle} resizeMode={'stretch'} />
            )}
        </View>
    );
}

Fader.displayName = 'Fader';
Fader.position = FaderPosition;

export default Fader;

const staticStyles = StyleSheet.create({
    containerTop: {
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    containerBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    containerLeft: {
        position: 'absolute',
        left: 0,
        height: '100%',
    },
    containerRight: {
        position: 'absolute',
        right: 0,
        height: '100%',
    },
});
