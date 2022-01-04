import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginRight: normalize(10),
  },
  credentials: {
    marginLeft: normalize(10),
  },
});
