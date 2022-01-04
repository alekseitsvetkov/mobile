import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { colors } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const ListFilterItem = ({ name, icon }: TListFilterItemProps) => {
  return (
    <TouchableHighlight
      style={s.filterItem}
      underlayColor={colors.mainGray}
      onPress={() => navigation.navigate('Search')}
    >
      {icon ? icon : <Text style={s.filterItemTitle}>{name}</Text>}
    </TouchableHighlight>
  );
};
