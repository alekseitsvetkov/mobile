import { StyleSheet } from 'react-native';

import { radius, tBase, tSmallRegular } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  nearbyImage: {
    height: normalize(150),
    width: normalize(240),
    borderRadius: radius.base,
  },
  slider: {
    overflow: 'visible',
    paddingHorizontal: normalize(20),
  },
  main: {
    marginHorizontal: normalize(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    marginTop: normalize(10),
    width: normalize(240 - 40),
    ...tBase,
  },
  itemDesc: {
    marginTop: normalize(2),
    width: normalize(240),
    ...tSmallRegular,
  },
});
