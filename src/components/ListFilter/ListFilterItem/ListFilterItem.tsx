import React from 'react';

import {Text, TouchableHighlight} from 'react-native';

import {navigation} from '_app/services/navigations';
import {colors} from '_app/constants';

import {s} from './styles';

export const ListFilterItem = ({name, icon}: TListFilterItemProps) => {
    return (
        <TouchableHighlight
            style={s.filterItem}
            underlayColor={colors.mainGray}
            onPress={() => navigation.navigate('Search')}>
            {icon ? icon : <Text style={s.filterItemTitle}>{name}</Text>}
        </TouchableHighlight>
    );
};
