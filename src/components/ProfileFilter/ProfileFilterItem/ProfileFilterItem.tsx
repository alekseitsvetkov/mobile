import React, { useContext } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

import { AppContext } from '_app/context';
import { ThemeColors } from '_app/types/theme';

import { s } from './styles';

export const ProfileFilterItem = ({ selected, title, name }: TListFilterItemProps) => {
  const { theme, selectList } = useContext(AppContext);

  return (
    <TouchableHighlight
      onPress={() => selectList(name)}
      style={[s.filterItem, styles(theme).main, selected === name && styles(theme).accent]}
      underlayColor={selected === name ? theme.text01 : theme.background}
    >
      <Text style={[s.filterItemTitle, styles(theme).text, selected === name && styles(theme).title]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
    title: {
      color: theme.text02,
    },
    main: {
      backgroundColor: theme.background,
    },
    accent: {
      backgroundColor: theme.text01,
    },
  });
