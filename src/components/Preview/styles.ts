import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {radius, tBase} from '_app/constants/globalStyle';
import {colors} from '_app/constants';

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray100,
        borderRadius: radius.base,
        margin: normalize(10),
        padding: normalize(10),
    },
    title: {
        ...tBase,
        fontWeight: '600',
        fontSize: 18,
        paddingVertical: normalize(10),
        textAlign: 'center',
    },
    paragraph: {
        ...tBase,
        paddingVertical: normalize(5),
    },
    semibold: {
        fontWeight: '600',
    },
});
