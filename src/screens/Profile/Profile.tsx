import React from 'react';

import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

import {HStack, Heading, Spinner} from 'native-base';

import {signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {useMeQuery} from '_app/generated/graphql';
import {ACTIVE_OPACITY, DEFAULT_OPACITY} from '_app/constants';
import {Avatar, MainContainer} from '_app/components';

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
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        );
    }

    if (error) {
        // TODO: something here
        return <View />;
    }

    if (!user) {
        // TODO: something here
        return <View />;
    }

    return (
        <MainContainer statusBarStyle="light-content">
            <TouchableOpacity activeOpacity={user.avatar ? ACTIVE_OPACITY : DEFAULT_OPACITY}>
                <Avatar src={user.avatar} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => logOut()}>
                <Text>Logout</Text>
            </TouchableWithoutFeedback>
        </MainContainer>
    );
};
