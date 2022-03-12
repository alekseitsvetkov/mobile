import {Platform} from 'react-native';

const {OS} = Platform;

export const PLATFORM = {
    OS,
    IS_ANDROID: OS === 'android',
    IS_IOS: OS === 'ios',
};

// TODO: MOVE TO ANOTHER FILE
export const ACTIVE_OPACITY = 0.6;
export const DEFAULT_OPACITY = 1;
