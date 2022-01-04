import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Avatar, SafeAreaWrapper } from '_app/components';
import MenuItem from '_app/components/MenuItem/MenuItem';
import { radius, tBase } from '_app/constants';
import { AppContext } from '_app/context';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  const { loading, data } = useMeQuery();

  const user = data!.me;

  return (
    <SafeAreaWrapper>
      <View style={styles(theme).container}>
        <View style={styles(theme).wrap}>
          {!loading && (
            <TouchableOpacity
              style={styles(theme).avatar}
              activeOpacity={user.avatar ? 0.7 : 1}
              onPress={() =>
                user.avatar &&
                navigation.push('Avatar', {
                  image: user.avatar,
                })
              }
            >
              <Avatar src={user.avatar} username={user.username} />
            </TouchableOpacity>
          )}
          {user.bio !== null && user.name?.length !== 0 && (
            <Text numberOfLines={1} style={[tBase, styles(theme).name]}>
              {user.name}
            </Text>
          )}
          {user.bio !== null && user.bio?.length !== 0 && (
            <Text numberOfLines={1} style={[tBase, styles(theme).text2]}>
              {user.bio}
            </Text>
          )}
          {/* TODO: format phone like this +7 999 888-77-66 */}
          <Text numberOfLines={1} style={[tBase, styles(theme).text2]}>
            +{user.phone}
          </Text>
          <Text numberOfLines={1} style={[tBase, styles(theme).text2]}>
            @{user.username}
          </Text>
          <TouchableOpacity style={styles(theme).change} onPress={() => navigation.push('ProfileChange')}>
            <Text style={[tBase, styles(theme).text]}>{t('profile:change')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <MenuItem name="notifications" icon="bell" action={() => navigation.push('Notifications')} /> */}
      {/* <MenuItem name="appearance" icon="image" action={() => navigation.push('Appearance')} /> */}
      {/* <MenuItem name="language" icon="globe" action={() => navigation.push('Language')} /> */}
      {/* <MenuItem name="help" icon="life-buoy" action={() => navigation.push('Help')} /> */}
      <MenuItem name="about" icon="info" action={() => navigation.push('About')} />
    </SafeAreaWrapper>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: normalize(10),
      width: '100%',
    },
    wrap: {
      marginTop: normalize(20),
      marginBottom: normalize(10),
      backgroundColor: theme.gray01,
      alignItems: 'center',
      width: '100%',
      paddingVertical: normalize(20),
      borderRadius: radius.base,
      position: 'relative',
    },
    avatar: {
      marginBottom: normalize(10),
    },
    text: {
      color: theme.text01,
    },
    text2: {
      color: theme.text01,
      paddingTop: normalize(5),
    },
    name: {
      color: theme.text01,
      paddingTop: normalize(5),
      fontWeight: '600',
    },
    change: {
      position: 'absolute',
      top: normalize(10),
      right: normalize(10),
    },
  });
