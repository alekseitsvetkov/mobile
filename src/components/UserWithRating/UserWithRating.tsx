import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar } from '_app/components';
import { tBase } from '_app/constants';
import { AppContext } from '_app/context';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';

import { s } from './styles';

export const UserWithRating = ({ item, index }: UserWithRatingProps) => {
  const { theme } = useContext(AppContext);

  const { node } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.push('ProfileUser', {
          user: node,
        })
      }
    >
      <View style={s.container}>
        <View style={s.wrap}>
          <Text style={[tBase, s.number, styles(theme).text]}>{index + 1}</Text>
          <Avatar small username={node.username} src={node.avatar} />
          <View style={s.credentials}>
            <Text style={[tBase, styles(theme).text]}>{node.name}</Text>
            <Text style={[tBase, styles(theme).text]}>@{node.username}</Text>
          </View>
        </View>
        <Text style={[tBase, styles(theme).text]}>{node.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
  });
