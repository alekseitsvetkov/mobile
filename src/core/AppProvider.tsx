import React from 'react';

import {initialWindowMetrics} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
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

import {themeConfig} from '_app/utils/themeConfig';
import {colorModeManager, theme} from '_app/utils';
import {client} from '_app/services/graphql';
import {AppContextProvider} from '_app/context';

import {AppWrapper} from './AppWrapper';
import '_app/i18n';

const Provider = (): JSX.Element => {
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
                        <NativeBaseProvider
                            initialWindowMetrics={initialWindowMetrics}
                            theme={theme}
                            colorModeManager={colorModeManager}
                            config={themeConfig}>
                            <ActionSheetProvider>
                                <BottomSheetModalProvider>
                                    <AppWrapper />
                                </BottomSheetModalProvider>
                            </ActionSheetProvider>
                        </NativeBaseProvider>
                    </AppContextProvider>
                </ApolloProvider>
            </TouchEventBoundary>
        );
    }
};

const AppProvider = connectActionSheet(Provider);

export {AppProvider};
