import {tLogo} from "_app/constants";
import {AppContext} from "_app/context";
import {ThemeColors} from "_app/types/theme";
import {normalize} from "_app/utils/dimensions";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import React, {useContext} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Constants?.manifest?.extra?.expoClientId,
    iosClientId: Constants?.manifest?.extra?.iosClientId,
    androidClientId: Constants?.manifest?.extra?.androidClientId,
    webClientId: Constants?.manifest?.extra?.webClientId,
  });

  const {theme} = useContext(AppContext);

  React.useEffect(() => {
    if (response?.type === "success") {
      const {authentication} = response;
      console.log("response", response);
    }
  }, [response]);

  return (
    <View style={styles(theme).container}>
      <Text style={[tLogo, styles(theme).formTitle]}>Skeetry</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    formTitle: {
      marginBottom: normalize(30),
      color: theme.text01,
    },
  });
