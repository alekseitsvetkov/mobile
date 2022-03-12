import {Animated} from 'react-native';

import * as Colors from './colors';

const SHADOW_COLOR = Colors.black;
const SHADOW_OFFSET_HEIGHT = 4;
const SHADOW_OPACITY = 0.15;
const SHADOW_RADIUS = 30;

export default function shadow() {
    return {
        shadowColor: SHADOW_COLOR,
        shadowOffset: {
            width: new Animated.Value(0),
            height: SHADOW_OFFSET_HEIGHT,
        },
        shadowOpacity: SHADOW_OPACITY,
        shadowRadius: SHADOW_RADIUS,
    };
}
