import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH} from '_app/utils';

const IMAGE_HEIGHT = 350;
const NORMALIZE_16 = 16;

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
        backgroundColor: '#000000',
        opacity: 0.3,
        position: 'absolute',
    },
    info: {
        position: 'absolute',
        bottom: 54,
        left: NORMALIZE_16,
        right: NORMALIZE_16,
    },
    infoText: {
        color: '#ffffff',
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
        bottom: 36,
        left: NORMALIZE_16,
    },
    element: {
        height: 2,
        width: 18,
        backgroundColor: '#ffffff',
        opacity: 0.35,
        borderRadius: 2,
        marginRight: 4,
    },
    elementActive: {
        opacity: 1,
    },
});
