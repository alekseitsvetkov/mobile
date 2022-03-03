import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {colors, fontFamily} from '_app/constants';

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: normalize(40),
        marginHorizontal: normalize(16),
        marginTop: normalize(-20),
        paddingHorizontal: normalize(16),
        borderRadius: 8,
        shadowColor: colors.black,
        shadowOpacity: 0.15,
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 4},
    },
    text: {
        color: colors.gray500,
        fontFamily: fontFamily.medium,
    },
});
