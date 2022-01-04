import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { s } from './styles';

export const PlacesScreen = () => {
  return (
    <ScrollView style={s.categoryList}>
      <View style={s.categories}>
        <Text style={s.categoriesTitle}>Places</Text>
      </View>
    </ScrollView>
  );
};
