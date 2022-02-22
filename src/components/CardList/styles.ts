import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {colors} from '_app/constants';

export const s = StyleSheet.create({
    list: {
        backgroundColor: colors.white,
        paddingHorizontal: normalize(20),
    },
});
