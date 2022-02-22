import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH, normalize} from '_app/utils/dimensions';
import {colors} from '_app/constants';

export const s = StyleSheet.create({
    container: {position: 'relative'},
    image: {
        width: SCREEN_WIDTH,
        height: normalize(380),
    },
    pager: {
        position: 'absolute',
        bottom: normalize(20),
        right: normalize(20),
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 4,
        paddingHorizontal: normalize(12),
        padding: normalize(6),
    },
    plusImage: {
        backgroundColor: colors.gray200,
        width: SCREEN_WIDTH,
        height: normalize(380),
        paddingHorizontal: normalize(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
