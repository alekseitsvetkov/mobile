import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  categoryWrapper: {
    marginVertical: normalize(14),
    marginHorizontal: normalize(14),
    paddingRight: normalize(20),
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray100,
    padding: normalize(12),
    borderRadius: 12,
    marginHorizontal: normalize(6),
    minWidth: normalize(150),
  },
  categoryEmoji: {
    backgroundColor: colors.gray200,
    borderRadius: 10,
    padding: normalize(12),
    marginRight: normalize(10),
  },
});
