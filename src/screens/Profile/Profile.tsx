import React from 'react';

import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import i18n from 'i18n-js';

import {signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {Surface, Text} from '_app/lib/skeetry-ui';
import {useMeQuery} from '_app/generated/graphql';
import {ACTIVE_OPACITY, DEFAULT_OPACITY} from '_app/constants';
import {Avatar, MainContainer} from '_app/components';

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
        return signOut();
    }

    if (!user) {
        // TODO: something here
        return signOut();
    }

    return (
        <MainContainer statusBarStyle="light-content">
            <TouchableOpacity activeOpacity={user.avatar ? ACTIVE_OPACITY : DEFAULT_OPACITY}>
                <Avatar src={user.avatar} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => logOut()}>
                <Text>{i18n.t('logout')}</Text>
            </TouchableWithoutFeedback>
        </MainContainer>
    );
};
