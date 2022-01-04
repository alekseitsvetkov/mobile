import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  menuItem: {
    width: '100%',
  },
  menuItemText: {
    marginLeft: normalize(10),
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
