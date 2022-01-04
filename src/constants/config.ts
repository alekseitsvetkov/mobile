import { Platform } from 'react-native';

const { OS } = Platform;

export const PLATFORM = {
  OS,
  IS_ANDROID: OS === 'android',
  IS_IOS: OS === 'ios',
};
