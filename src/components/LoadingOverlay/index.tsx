import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import { s } from './styles';

export const LoadingOverlay = ({ isLocal }: { isLocal?: boolean }): JSX.Element | null => {
  return isLocal ? (
    <Animated.View style={[s.wrapper]}>
      <View style={[s.container]}>
        {/* <Text>Logo</Text>
        <Text>Loader</Text> */}
        <Text>Loading...</Text>
      </View>
    </Animated.View>
  ) : null;
};
