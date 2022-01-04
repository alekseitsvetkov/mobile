import React from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

const CloseModal = () => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Animated.View
        style={{
          backgroundColor: colors.white,
          borderRadius: 100,
          alignItems: 'center',
          paddingVertical: normalize(6),
          paddingHorizontal: normalize(6),
          marginLeft: normalize(20),
        }}
      >
        <Icon name="x" size={18} color={colors.black} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CloseModal;
