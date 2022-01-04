import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { Card } from '_app/components';

import { s } from './styles';

// TODO: type item when done

export const CardList = ({ data, onEndReached }): JSX.Element => {
  const renderItem = ({ item }: any) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Card item={item.node} size="full" />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={s.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.node.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Text>There are no elements items yet.</Text>}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        return onEndReached();
      }}
      decelerationRate="fast"
    />
  );
};
