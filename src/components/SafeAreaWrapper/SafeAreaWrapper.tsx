import React, { useContext } from 'react';
import { Keyboard, SafeAreaView, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import { AppContext } from '_app/context';
import { DynamicStatusBar } from '_app/theme/Colors';
import { ThemeColors } from '_app/types/theme';

export const SafeAreaWrapper = ({ children, center }: TSafeAreaWrapper) => {
  const { theme, themeType } = useContext(AppContext);
  const { barStyle, backgroundColor } = DynamicStatusBar[themeType];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[styles(theme).container, center && styles(theme).center]}>
        <StatusBar animated barStyle={barStyle} backgroundColor={backgroundColor} />
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.base,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
