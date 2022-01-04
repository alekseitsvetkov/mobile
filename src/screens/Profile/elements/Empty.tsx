import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { tBase, tTitle } from '_app/constants';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

export const Empty = ({ t, theme, type }) => {
  return (
    <View style={styles(theme).container}>
      <Text style={[tTitle, styles(theme).title]}>{t('profile:empty_list_title')}</Text>
      <Text style={[tBase, styles(theme).desc]}>
        {type === 'moments' ? t('profile:empty_moments_desc') : t('profile:empty_list_desc')}
      </Text>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      margin: normalize(20),
    },
    title: {
      color: theme.text01,
      textAlign: 'center',
      marginBottom: normalize(5),
    },
    desc: {
      color: theme.text01,
      textAlign: 'center',
    },
  });
