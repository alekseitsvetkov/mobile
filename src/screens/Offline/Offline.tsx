import React from 'react';
import { Text } from 'react-native';

import { SafeAreaWrapper } from '_app/components';

import { s } from './styles';

export const OfflineScreen = () => {
  return (
    <SafeAreaWrapper>
      <Text style={s.title}>You're Offline</Text>
      <Text style={s.description}>Turn off Airplane Mode or connect to Wi-Fi.</Text>
    </SafeAreaWrapper>
  );
};
