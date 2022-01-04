import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import { s } from './styles';

export const FormWrapper = ({ children, verticalOffset }: TFormWrapper) => {
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={verticalOffset}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={s.centerContainer}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
