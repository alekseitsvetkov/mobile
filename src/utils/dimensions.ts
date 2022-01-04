import { Dimensions, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT: number = getStatusBarHeight();

export const realWidth: number = SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_WIDTH : SCREEN_HEIGHT;

const comparingScreenWidth: number = 414;
const comparingScreenHeight: number = 896;

export const horizontalScale = (size: number = 0): number => (SCREEN_WIDTH / comparingScreenWidth) * size;
export const verticalScale = (size: number = 0): number =>
  ((SCREEN_HEIGHT - (StatusBar.currentHeight || 0)) / comparingScreenHeight) * size;

export const normalize = (size: number): number => {
  return Math.round((size * realWidth) / comparingScreenWidth);
};
