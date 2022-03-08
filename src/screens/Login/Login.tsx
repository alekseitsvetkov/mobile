import React, {useCallback, useContext, useEffect, useState} from 'react';

import {Text, View} from 'react-native';

import {Button, Center, Spinner} from 'native-base';
import i18n from 'i18n-js';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';

import {loadToken, saveToken} from '_app/utils';
import {signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {useSignInWithGoogleMutation} from '_app/generated/graphql';
import {AppContext} from '_app/context';
import {EDGES, MainContainer} from '_app/components';

import {s} from './styles';

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {
    const {updateMe} = useContext(AppContext);
    const [initializing, setInitializing] = useState(true);

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: Constants?.manifest?.extra?.EXPO_CLIENT_ID,
        iosClientId: Constants?.manifest?.extra?.IOS_CLIENT_ID,
        androidClientId: Constants?.manifest?.extra?.ANDROID_CLIENT_ID,
        webClientId: Constants?.manifest?.extra?.WEB_CLIENT_ID,
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
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    let content = (
        <Center>
            <Spinner accessibilityLabel="Loading posts" />
            <Text>Loading</Text>
        </Center>
    );

    if (!initializing) {
        content = (
            <View style={s.container}>
                <Text style={s.formTitle}>Skeetry</Text>

                <Button
                    isLoading={!request || loading}
                    isDisabled={!request || loading}
                    isLoadingText={i18n.t('loading')}
                    onPress={() => promptAsync()}>
                    {i18n.t('sign_in_with_google')}
                </Button>
            </View>
        );
    }

    return (
        <MainContainer edges={EDGES.horizontal} statusBarStyle="light-content">
            {content}
        </MainContainer>
    );
};
