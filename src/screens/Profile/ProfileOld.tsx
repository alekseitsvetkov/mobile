import React from 'react';

import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

import i18n from 'i18n-js';

import {signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {useMeQuery} from '_app/generated/graphql';
import {Surface, Text} from '_app/design-system';
import {ACTIVE_OPACITY, DEFAULT_OPACITY} from '_app/constants';
import {Avatar, EDGES, MainContainer, UserInfo} from '_app/components';

import {s} from './styles';

const logOut = async () => {
    await signOut();
    navigation.navigate('Auth');
};

export const ProfileScreen = () => {
    const {loading, data, error, refetch} = useMeQuery();

    const user = data?.me;

    if (loading) {
        // TODO: something here
        return (
            <Surface>
                <Text>Loading</Text>
            </Surface>
        );
    }

    if (error) {
        // TODO: something here
        return logOut();
    }

    if (!user) {
        // TODO: something here
        return logOut();
    }

    return (
        <MainContainer marginTop statusBarStyle="light-content">
            <UserInfo user={user} />
            <TouchableWithoutFeedback onPress={() => logOut()}>
                <Text style={{paddingHorizontal: 16}}>{i18n.t('logout')}</Text>
            </TouchableWithoutFeedback>
        </MainContainer>
    );
};
