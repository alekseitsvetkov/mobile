import React from 'react';

import {TouchableOpacity, View} from 'react-native';

import {navigation} from '_app/services/navigations';
import {Text} from '_app/lib/skeetry-ui';
import {Avatar} from '_app/components';

import {s} from './styles';

export const UserCard = ({node, avatar, name}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
                navigation.push('ProfileUser', {
                    user: node,
                })
            }>
            <View style={s.container}>
                <Avatar src={avatar} name={name} />
                <View>
                    <Text style={s.text}>{name}</Text>
                    {/* <Text style={s.text}>@{username}</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};
