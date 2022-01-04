import { useNetInfo } from '@react-native-community/netinfo';

export const useOffline = (): boolean => {
  const { type, isConnected, isInternetReachable } = useNetInfo();
  return type === 'none' || (type !== 'unknown' && (!isConnected || isInternetReachable === false));
};
