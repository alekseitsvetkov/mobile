import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  centerContainer: {
    height: SCREEN_HEIGHT - 50 - 40 - STATUS_BAR_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
