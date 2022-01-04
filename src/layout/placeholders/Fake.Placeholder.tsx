import {AppContext} from "_app/context";
import {ThemeColors} from "_app/types/theme";
import {normalize} from "_app/utils/dimensions";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {View, Text, StyleSheet} from "react-native";

export const FakePlaceholder = () => {
  const {theme} = useContext(AppContext);
  const {t} = useTranslation();

  return (
    <View style={styles(theme).container}>
      <Text>{t("utils:loading")}</Text>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: normalize(20),
    },
  });
