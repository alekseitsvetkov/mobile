import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, View, Text, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { tBase } from '_app/constants';
import { AppContext } from '_app/context';
import { ThemeColors } from '_app/types/theme';

import { s } from './styles';

const MenuItem = ({ name, icon, action }: MenuItemProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <TouchableHighlight
      underlayColor={theme.gray01}
      onPress={action ? action : () => Alert.alert(t('utils:wip'))}
      style={s.menuItem}
    >
      <View style={s.container}>
        <View style={s.wrap}>
          <Icon name={icon} size={22} color={theme.text01} />
          <Text style={[tBase, s.menuItemText, styles(theme).text]}>{t(`settings:${name}`)}</Text>
        </View>
        <Icon name="chevron-right" size={18} color={theme.text01} />
      </View>
    </TouchableHighlight>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
  });

export default MenuItem;
