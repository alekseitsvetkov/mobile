import React from 'react';
import { View, Text } from 'react-native';

export const FormGroup = ({ name, children }) => {
  return (
    <View>
      <Text>{name}</Text>
      {children}
    </View>
  );
};
