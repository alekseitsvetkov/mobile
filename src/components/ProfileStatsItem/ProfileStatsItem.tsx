import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AppContext } from '_app/context';
import { ThemeColors } from '_app/types/theme';

import { s } from './styles';

export const ProfileStatsItem = ({ name, number, action }: TProfileStatsItemProps) => {
  const { theme } = useContext(AppContext);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={action} style={s.item}>
      <Text style={[s.number, styles(theme).text]}>{number}</Text>
      <Text style={[s.name, styles(theme).text]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
  });
