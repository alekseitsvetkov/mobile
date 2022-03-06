import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {colors, fontFamily} from '_app/constants';

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: normalize(16),
        height: normalize(40),
        marginHorizontal: normalize(16),
        marginTop: normalize(-20),
        borderRadius: 8,
        shadowColor: colors.black,
        shadowOpacity: 0.15,
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 4},
        elevation: 6,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: colors.gray500,
        fontFamily: fontFamily.medium,
        marginLeft: normalize(16),
    },
});
