import React from 'react';
import { Button } from 'react-native';

export const TopTabBar = ({ navigation }) => {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SomeScreen');
      }}
    />
  );
};
