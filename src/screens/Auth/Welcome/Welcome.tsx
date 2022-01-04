import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, StyleSheet, View } from 'react-native';

import { SafeAreaWrapper } from '_app/components';
import { AppContext } from '_app/context';
import { Button } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

export const WelcomeScreen = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <SafeAreaWrapper center>
      <View style={styles(theme).container}>
        <Text style={styles(theme).text}>{t('utils:welcome_to')} Skeetry</Text>
        <Button label={t('utils:next')} onPress={() => navigation.navigate('RootTab')} loading={false} />
      </View>
    </SafeAreaWrapper>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: normalize(20),
      width: '100%',
    },
    text: {
      color: theme.text01,
      marginVertical: 20,
      textAlign: 'center',
    },
  });
