import { StatusBar, StyleSheet } from 'react-native';

import { colors } from '_app/constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.mainGray,
    padding: 6,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: '600',
  },
});
