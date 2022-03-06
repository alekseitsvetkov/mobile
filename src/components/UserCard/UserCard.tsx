import React, {useContext} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {navigation} from '_app/services/navigations';
import {AppContext} from '_app/context';
import {tBase} from '_app/constants';
import {Avatar} from '_app/components';

export const UserCard = ({node, avatar, username, name}) => {
    const {theme} = useContext(AppContext);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
                navigation.push('ProfileUser', {
                    user: node,
                })
            }>
            <View style={styles(theme).container}>
                <Avatar src={avatar} username={username} />
                <View>
                    <Text style={[tBase, styles(theme).text]}>{name}</Text>
                    {/* <Text style={[tBase, styles(theme).text]}>@{username}</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            marginRight: normalize(20),
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            color: theme.text01,
            paddingLeft: normalize(10),
        },
    });
