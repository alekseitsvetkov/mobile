import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {tBase} from '_app/constants';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: normalize(10),
    },
    categories: {
        paddingTop: normalize(18),
        paddingHorizontal: normalize(20),
    },
    categoriesTitle: {
        textAlign: 'center',
        ...tBase,
    },
    categoryList: {
        paddingHorizontal: normalize(20),
    },
});
