import {ApolloProvider} from "@apollo/client";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import {IconSizes} from "_app/constants";
import {AppContext, AppContextProvider} from "_app/context";
import "_app/i18n";
import {LoadingIndicator} from "_app/layout";
import RootStackNavigation from "_app/navigations";
import {client} from "_app/services/graphql";
import {ThemeStatic} from "_app/theme/Colors";
import {loadThemeType} from "_app/utils/storage";
import AppLoading from "expo-app-loading";
// import {StatusBar} from "expo-status-bar";
import React, {useContext, useEffect, useState} from "react";
// import {StyleSheet, Text, View} from "react-native";
import {LogBox} from "react-native";
import Config from "react-native-config";
import * as Sentry from "sentry-expo";

LogBox.ignoreLogs(["Require cycle:"]);

if (Config.NODE_ENV !== "dev") {
  Sentry.init({
    dsn: Config.DSN,
    environment: Config.NODE_ENV,
  });

  // TODO: Identify Users
  // Sentry.setUser({ id: '1', username: 'user' });
}

const SafeAreaApp = () => {
  const {toggleTheme} = useContext(AppContext);

  const [initializing, setInitializing] = useState(true);

  const initializeTheme = async () => {
    setInitializing(true);
    const storageTheme = await loadThemeType();
    if (storageTheme) {
      toggleTheme(storageTheme);
    }
    setInitializing(false);
  };

  useEffect(() => {
    initializeTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return <LoadingIndicator color={ThemeStatic.accent} size={IconSizes.x1} />;
  }

  return <RootStackNavigation />;
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <AppContextProvider>
          <ActionSheetProvider>
            <SafeAreaApp />
          </ActionSheetProvider>
        </AppContextProvider>
      </ApolloProvider>
    );
  }
};

export default connectActionSheet(App);
