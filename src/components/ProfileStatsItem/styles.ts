import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  number: {
    color: colors.black,
    fontSize: normalize(16),
    fontWeight: '700',
    marginBottom: normalize(2),
  },
  numberTh: {
    fontSize: normalize(12),
    color: colors.mediumGray,
  },
  name: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: colors.mediumGray,
  },
});
