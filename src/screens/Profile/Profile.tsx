import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';

import {FlatList, RefreshControl, StyleSheet, Text, useColorScheme} from 'react-native';

import {useTranslation} from 'react-i18next';
import {useScrollToTop} from '@react-navigation/native';
import {useActionSheet} from '@expo/react-native-action-sheet';

import {signOut} from '_app/utils/authentication';
import {ThemeColors} from '_app/types/theme';
import {navigation} from '_app/services/navigations';
import {Button} from '_app/layout';
import {OrderDirection, useMeQuery, useVisitedQuery, useWantedQuery} from '_app/generated/graphql';
import {AppContext} from '_app/context';
import {MainContainer} from '_app/components';

import {s} from './styles';
import {Empty, renderHeader, renderItem} from './elements';

export const ProfileScreen = () => {
    const ref = useRef(null);
    const {t} = useTranslation();
    const {theme, selectedList, selectList} = useContext(AppContext);
    const scheme = useColorScheme();

    const {showActionSheetWithOptions} = useActionSheet();
    const [refreshing, setRefreshing] = useState(false);
    const [wanted, setWanted] = useState([]);
    const [visited, setVisited] = useState([]);

    const {loading, data, error, refetch} = useMeQuery();

    const {
        data: dataWanted,
        loading: loadingWanted,
        error: errorWanted,
        refetch: refetchWanted,
        fetchMore: fetchMoreWanted,
    } = useWantedQuery({
        variables: {
            first: 5,
            orderBy: {
                direction: OrderDirection.Asc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (dataWanted && wanted.length === 0) {
            setWanted(dataWanted.wanted.edges);
        }
    }, [dataWanted, wanted.length]);

    const wantedEndReached = async () => {
        if (wanted) {
            const lastWanted = wanted[wanted.length - 1].node.id;
            const newData = await fetchMoreWanted({
                variables: {
                    first: 5,
                    after: lastWanted,
                    orderBy: {
                        direction: OrderDirection.Asc,
                    },
                },
            });
            setWanted((prevState) => [...prevState, ...newData.data.wanted.edges]);
        }
    };

    const {
        data: dataVisited,
        loading: loadingVisited,
        error: errorVisited,
        refetch: refetchVisited,
        fetchMore: fetchMoreVisited,
    } = useVisitedQuery({
        variables: {
            first: 5,
            orderBy: {
                direction: OrderDirection.Asc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (dataVisited && visited.length === 0) {
            setVisited(dataVisited.visited.edges);
        }
    }, [dataVisited, visited.length]);

    const visitedEndReached = async () => {
        if (wanted) {
            const lastVisited = visited[visited.length - 1].node.id;
            const newData = await fetchMoreVisited({
                variables: {
                    first: 5,
                    after: lastVisited,
                    orderBy: {
                        direction: OrderDirection.Asc,
                    },
                },
            });
            setVisited((prevState) => [...prevState, ...newData.data.visited.edges]);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        true && refetchWanted();
        true && refetchVisited();
        setRefreshing(false);
    }, [refetch, refetchWanted, refetchVisited]);

    useScrollToTop(ref);

    if (loading) {
        return (
            <MainContainer>
                <Text style={styles(theme).text}>Loading...</Text>
            </MainContainer>
        );
    }

    const logOut = async () => {
        await signOut();
        navigation.navigate('Auth');
    };

    if (error || errorWanted || errorVisited) {
        return (
            <MainContainer>
                <Text style={styles(theme).text}>Error. Please try later...</Text>
                <Button label={t('utils:logout')} onPress={() => logOut()} loading={false} />
            </MainContainer>
        );
    }

    const user = data!.me;

    const isMe = true;

    const getData = () => {
        switch (selectedList) {
            case 'want':
                return wanted;
            case 'visited':
                return visited;

            default:
                return 'want';
        }
    };

    // const type = selectedList === 'moments' ? 'moments' : 'list';

    return (
        <MainContainer statusBarStyle="light-content">
            <FlatList
                ref={ref}
                ListHeaderComponent={renderHeader({
                    user,
                    t,
                    isMe,
                    theme,
                    scheme,
                    route: null,
                    showActionSheetWithOptions,
                    selectList,
                })}
                ListEmptyComponent={() => <Empty t={t} theme={theme} type="list" />}
                numColumns={2}
                horizontal={false}
                data={getData()}
                columnWrapperStyle={s.listWrapper}
                contentContainerStyle={{}}
                renderItem={renderItem}
                keyExtractor={(item) => item.node.id}
                showsVerticalScrollIndicator={false}
                decelerationRate="fast"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                // TODO: Fix this
                onEndReached={() => (true ? wantedEndReached() : visitedEndReached())}
            />
        </MainContainer>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        text: {
            color: theme.text01,
        },
    });
