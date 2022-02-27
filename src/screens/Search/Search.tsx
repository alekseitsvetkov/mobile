import React, {useRef, useState} from 'react';

import {ScrollView, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import {useScrollToTop} from '@react-navigation/native';

import {normalize} from '_app/utils/dimensions';
import {HorizontalListPlaceholder, Input} from '_app/layout';
import {OrderDirection, useCitiesQuery, useUsersQuery} from '_app/generated/graphql';
import {Card, MainContainer, UserCard} from '_app/components';

export const SearchScreen = () => {
    const {t} = useTranslation();

    const ref = useRef<ScrollView>(null);
    const [input, setInput] = useState('');

    const {data: dataSearch, loading: loadingSearch} = useCitiesQuery({
        variables: {
            first: 5,
            query: input,
            orderBy: {
                direction: OrderDirection.Desc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    const {data: dataUsers, loading: loadingUsers} = useUsersQuery({
        variables: {
            first: 5,
            query: input,
            orderBy: {
                direction: OrderDirection.Desc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleChange = async (value) => {
        setInput(value);
    };

    useScrollToTop(ref);

    const searchList = dataSearch?.cities.edges;
    const usersList = dataUsers?.users.edges;

    console.log({searchList});

    return (
        <MainContainer>
            <View style={{paddingHorizontal: normalize(20)}}>
                <Input ref={null} placeholder={t('search:search')} onChangeText={handleChange} />
            </View>
            {searchList?.length === 0 && usersList?.length === 0 && (
                <Text style={[{alignItems: 'center', padding: 20}]}>{t('search:not_found')}</Text>
            )}
            {input.length !== 0 && (
                <View>
                    {loadingSearch && <HorizontalListPlaceholder size="small" />}
                    {searchList?.length !== 0 && (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{alignItems: 'center', padding: 20}}>
                            {searchList?.map((i) => (
                                <View key={i.node.id} style={{marginRight: 20}}>
                                    <Card item={i.node} size="small" />
                                </View>
                            ))}
                        </ScrollView>
                    )}
                    {loadingUsers && <HorizontalListPlaceholder size="small" />}
                    {usersList?.length !== 0 && (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{alignItems: 'center', padding: 20}}>
                            {usersList?.map((i) => {
                                const {id, avatar, username, name} = i.node;

                                return (
                                    <UserCard key={id} node={i.node} avatar={avatar} username={username} name={name} />
                                );
                            })}
                        </ScrollView>
                    )}
                </View>
            )}
        </MainContainer>
    );
};
