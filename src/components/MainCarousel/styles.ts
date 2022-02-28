import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH, normalize} from '_app/utils/dimensions';
import {colors} from '_app/constants';

const IMAGE_HEIGHT = normalize(350);
const NORMALIZE_16 = normalize(16);

export const s = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: IMAGE_HEIGHT,
    },
    image: {
        width: '100%',
        height: IMAGE_HEIGHT,
    },
    overlay: {
        width: '100%',
        height: IMAGE_HEIGHT,
        backgroundColor: colors.black,
        opacity: 0.3,
        position: 'absolute',
    },
    info: {
        position: 'absolute',
        bottom: normalize(54),
        left: NORMALIZE_16,
        right: NORMALIZE_16,
    },
    infoText: {
        color: colors.white,
    },
    infoTitle: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: '600',
    },
    infoDescription: {
        fontSize: 14,
    },
    pagination: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        bottom: normalize(36),
        left: NORMALIZE_16,
    },
    element: {
        height: normalize(2),
        width: normalize(18),
        backgroundColor: colors.white,
        opacity: 0.35,
        borderRadius: 2,
        marginRight: normalize(4),
    },
    elementActive: {
        opacity: 1,
    },
});
