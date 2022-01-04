import { StyleSheet } from 'react-native';

import { radius, colors } from '_app/constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: colors.mainGray,
    borderRadius: radius.full,
    padding: 15,
    alignSelf: 'center',
  },
  circle: {
    backgroundColor: colors.gray50,
    height: 30,
    width: 30,
    borderRadius: radius.full,
  },
});
