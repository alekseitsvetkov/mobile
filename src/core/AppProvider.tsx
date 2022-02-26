import React from 'react';

import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
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
import {AppContextProvider} from '_app/context';

import {AppWrapper} from './AppWrapper';

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
                        <ActionSheetProvider>
                            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                                <BottomSheetModalProvider>
                                    <AppWrapper />
                                </BottomSheetModalProvider>
                            </SafeAreaProvider>
                        </ActionSheetProvider>
                    </AppContextProvider>
                </ApolloProvider>
            </TouchEventBoundary>
        );
    }
};

const AppProvider = connectActionSheet(Provider);

export {AppProvider};
