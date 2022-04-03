import React, {useRef, useState} from 'react';

import {ScrollView, View} from 'react-native';

import i18n from 'i18n-js';
import {useScrollToTop} from '@react-navigation/native';

import {OrderDirection, useCitiesQuery} from '_app/generated/graphql';
import {Searchbar, Text} from '_app/design-system';
import {Card, MainContainer, UserCard} from '_app/components';

import {s} from './styles';

export const SearchScreen = () => {
    const ref = useRef<ScrollView>(null);
    const [searchValue, setSearchValue] = useState('');

    const {data: dataSearch, loading: loadingSearch} = useCitiesQuery({
        variables: {
            first: 5,
            query: searchValue,
            orderBy: {
                direction: OrderDirection.Desc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    // const {data: dataUsers, loading: loadingUsers} = useUsersQuery({
    //     variables: {
    //         first: 5,
    //         query: searchValue,
    //         orderBy: {
    //             direction: OrderDirection.Desc,
    //         },
    //     },
    //     notifyOnNetworkStatusChange: true,
    // });

    useScrollToTop(ref);

    const searchList = dataSearch?.cities.edges;
    // const usersList = dataUsers?.users.edges;

    return (
        <MainContainer statusBarStyle="light-content" marginTop>
            <View style={s.searchbarContainer}>
                <Searchbar
                    autoCapitalize="none"
                    autoFocus
                    autoCorrect={false}
                    placeholder={i18n.t('where_do_you_want_to_go')}
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>
            {/* {searchList?.length === 0 && usersList?.length === 0 && (
                <Text style={s.contentContainer}>{i18n.t('search_not_found')}</Text>
            )} */}
            {searchList?.length === 0 && <Text style={s.contentContainer}>{i18n.t('search_not_found')}</Text>}
            {searchValue.length !== 0 && (
                <View>
                    {/* {loadingSearch && <HorizontalListPlaceholder size="small" />} */}
                    {searchList?.length !== 0 && (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={s.centerContainer}>
                            {searchList?.map((i) => (
                                <View key={i.node.id} style={s.cardContainer}>
                                    <Card item={i.node} size="small" />
                                </View>
                            ))}
                        </ScrollView>
                    )}
                    {/* {loadingUsers && <HorizontalListPlaceholder size="small" />} */}
                    {/* {usersList?.length !== 0 && (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={s.centerContainer}>
                            {usersList?.map((i) => {
                                const {id, avatar, name} = i.node;

                                return <UserCard key={id} node={i.node} avatar={avatar} name={name} />;
                            })}
                        </ScrollView>
                    )} */}
                </View>
            )}
        </MainContainer>
    );
};
