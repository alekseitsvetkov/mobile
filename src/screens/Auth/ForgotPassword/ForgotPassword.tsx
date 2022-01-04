import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

import { SafeAreaWrapper } from '_app/components';

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaWrapper center>
      <Text>Forgot Password</Text>
    </SafeAreaWrapper>
  );
};
