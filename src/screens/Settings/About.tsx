import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, StyleSheet } from 'react-native';

import { SafeAreaWrapper } from '_app/components';
import { AppContext } from '_app/context';
import { Typography } from '_app/theme';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

import { version } from '../../../package.json';

const { FontSizes, FontWeights } = Typography;

export const AboutScreen = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <SafeAreaWrapper center>
      <Text style={[styles(theme).logo]}>Skeetry</Text>
      <Text style={[styles(theme).text]}>
        {t('utils:version')}: {version}
      </Text>
    </SafeAreaWrapper>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    logo: {
      ...FontSizes.Heading,
      ...FontWeights.Bold,
      color: theme.text01,
    },
    text: {
      marginTop: normalize(5),
      color: theme.text01,
    },
  });
