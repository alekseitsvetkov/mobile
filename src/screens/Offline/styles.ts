import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 18,
  },
  description: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 18,
    color: colors.mediumGray,
  },
});
