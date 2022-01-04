import { StyleSheet } from 'react-native';

import { colors, radius, tInput } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  contentContainer: {
    flexWrap: 'wrap',
    maxWidth: normalize(800),
    paddingHorizontal: normalize(12),
  },
  title: {
    color: colors.mediumGray,
    fontSize: 18,
    fontWeight: '500',
  },
  tag: {
    backgroundColor: colors.mainGray,
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(10),
    borderRadius: radius.full,
    margin: normalize(6),
  },
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: normalize(45),
    backgroundColor: colors.lightGray,
    color: colors.baseGray,
    borderRadius: radius.base,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: normalize(15),
    ...tInput,
  },
});
