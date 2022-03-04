import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {colors, fontFamily} from '_app/constants';

export const s = StyleSheet.create({
    container: {
        marginTop: normalize(16),
        marginBottom: normalize(20),
    },
    title: {
        marginHorizontal: normalize(16),
    },
    categoryWrapper: {
        marginTop: normalize(10),
        paddingHorizontal: normalize(8),
    },
    category: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: normalize(8),
        minWidth: normalize(116),
        paddingVertical: normalize(20),
        paddingHorizontal: normalize(38),
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.black,
        opacity: 0.25,
    },
    absoluteFillObject: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    categoryName: {
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: fontFamily.bold,
        color: colors.white,
        zIndex: 10,
    },
    // TODO: Deprecated, remove when task is done
    categoryEmoji: {
        backgroundColor: colors.gray200,
        borderRadius: 10,
        padding: normalize(12),
        marginRight: normalize(10),
    },
});
