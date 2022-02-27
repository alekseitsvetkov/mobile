import React, {useCallback, useContext, useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';

import {loadToken, saveToken} from '_app/utils/storage';
import {normalize} from '_app/utils/dimensions';
import {signOut} from '_app/utils/authentication';
import {ThemeColors} from '_app/types/theme';
import {navigation} from '_app/services/navigations';
import {Button, LoadingIndicator} from '_app/layout';
import {useSignInWithGoogleMutation} from '_app/generated/graphql';
import {AppContext} from '_app/context';
import {IconSizes, tLogo} from '_app/constants';
import {MainContainer} from '_app/components';

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {
    const {theme, updateMe} = useContext(AppContext);
    const [initializing, setInitializing] = useState(true);

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: Constants?.manifest?.extra?.expoClientId,
        iosClientId: Constants?.manifest?.extra?.iosClientId,
        androidClientId: Constants?.manifest?.extra?.androidClientId,
        webClientId: Constants?.manifest?.extra?.webClientId,
    });

    const [signInWithGoogle, {loading, data, error}] = useSignInWithGoogleMutation();

    useEffect(() => {
        if (response?.type === 'success') {
            const {params} = response;

            console.log('id_token: ', params.id_token);

            const idToken = params.id_token;

            signInWithGoogle({
                variables: {
                    idToken,
                },
            });
            setInitializing(false);
        }
    }, [response, signInWithGoogle]);

    const userData = data?.signInWithGoogle;

    useEffect(() => {
        if (data) {
            const {accessToken, user} = data.signInWithGoogle;

            saveToken(accessToken);
            updateMe(user);
            navigation.navigate('RootTab');
        }
    }, [data, updateMe]);

    const navigateToApp = async () => {
        try {
            // welcomeNotification();
            navigation.navigate('RootTab');
        } catch {
            signOut();
        }
    };

    const initialize = useCallback(async () => {
        const token = await loadToken();
        if (token) {
            await navigateToApp();
        }

        setInitializing(false);
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    let content = <LoadingIndicator color={theme.accent} size={IconSizes.x1} />;

    if (!initializing) {
        content = (
            <View style={styles(theme).container}>
                <Text style={[tLogo, styles(theme).formTitle]}>Skeetry</Text>

                <Button
                    loading={!request || loading}
                    label="Sign in with Google"
                    onPress={() => {
                        promptAsync();
                    }}
                />
            </View>
        );
    }

    return <MainContainer>{content}</MainContainer>;
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: normalize(20),
        },
        formTitle: {
            marginBottom: normalize(30),
            color: theme.text01,
        },
        testText: {
            padding: normalize(20),
        },
    });
