import React, {useContext, useEffect, useState} from 'react';

import {LogBox} from 'react-native';

import '_app/i18n';

import * as Sentry from 'sentry-expo';
import Config from 'react-native-config';
import AppLoading from 'expo-app-loading';
import {ActionSheetProvider, connectActionSheet} from '@expo/react-native-action-sheet';
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    useFonts,
} from '@expo-google-fonts/inter';
import {ApolloProvider} from '@apollo/client';

import {loadThemeType} from '_app/utils/storage';
import {ThemeStatic} from '_app/theme/Colors';
import {client} from '_app/services/graphql';
import RootStackNavigation from '_app/navigations';
import {LoadingIndicator} from '_app/layout';
import {AppContext, AppContextProvider} from '_app/context';
import {IconSizes} from '_app/constants';

LogBox.ignoreLogs(['Require cycle:']);

if (Config.NODE_ENV !== 'dev') {
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
    const [fontsLoaded] = useFonts({
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
