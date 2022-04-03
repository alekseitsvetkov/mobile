import React, {createContext, useEffect, useState} from 'react';

import {useColorScheme} from 'react-native';

import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import {useKeepAwake} from 'expo-keep-awake';
import AppLoading from 'expo-app-loading';
import {TouchEventBoundary} from '@sentry/react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
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

import {client} from '_app/services/graphql';
import {DarkTheme, DefaultTheme, Provider as ThemeProvider} from '_app/design-system';
import {AppContextProvider} from '_app/context';

import {AppWrapper} from './AppWrapper';

import '_app/i18n';

export const PreferencesContext = createContext<any>(null);

const Provider = (): JSX.Element => {
    useKeepAwake();

    const colorScheme = useColorScheme();

    const [theme, setTheme] = useState<SkeetryUI.Theme>(DarkTheme);

    useEffect(() => {
        if (colorScheme === 'dark') {
            setTheme(DarkTheme);
        } else {
            setTheme(DefaultTheme);
        }
    }, [colorScheme]);

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
            <TouchEventBoundary>
                <ApolloProvider client={client}>
                    <AppContextProvider>
                        <ThemeProvider theme={theme}>
                            <ActionSheetProvider>
                                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                                    <BottomSheetModalProvider>
                                        <AppWrapper />
                                    </BottomSheetModalProvider>
                                </SafeAreaProvider>
                            </ActionSheetProvider>
                        </ThemeProvider>
                    </AppContextProvider>
                </ApolloProvider>
            </TouchEventBoundary>
        );
    }
};

const AppProvider = connectActionSheet(Provider);

export {AppProvider};
