import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const Collection = ({ item }: TCollectionProps) => {
  const { title } = item;

  return (
    <Pressable
      key={item.id}
      onPress={() => {
        navigation.navigate('Search');
      }}
    >
      <View style={s.item}>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};
