import {Dimensions} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT: number = getStatusBarHeight();
