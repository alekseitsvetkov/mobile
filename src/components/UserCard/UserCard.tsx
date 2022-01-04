import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { Avatar } from '_app/components';
import { tBase } from '_app/constants';
import { AppContext } from '_app/context';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

export const UserCard = ({ node, avatar, username, name }) => {
  const { theme } = useContext(AppContext);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.push('ProfileUser', {
          user: node,
        })
      }
    >
      <View style={styles(theme).container}>
        <Avatar src={avatar} username={username} />
        <View>
          <Text style={[tBase, styles(theme).text]}>{name}</Text>
          <Text style={[tBase, styles(theme).text]}>@{username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      marginRight: normalize(20),
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: theme.text01,
      paddingLeft: normalize(10),
    },
  });
