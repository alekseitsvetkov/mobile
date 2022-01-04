import React from 'react';
import { View, Text } from 'react-native';

import { Collection } from '_app/components';

import { s } from './styles';

export const CollectionList = ({ title, data }): JSX.Element => {
  return (
    <View style={{ paddingBottom: 85 }}>
      <Text style={s.collectionListTitle}>{title}</Text>
      {data.map((item: any) => (
        <Collection key={item.id} item={item} />
      ))}
    </View>
  );
};
