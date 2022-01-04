import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize(20),
  },
});
