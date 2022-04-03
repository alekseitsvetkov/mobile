import React, {useCallback, useEffect, useState} from 'react';

import {FlatList} from 'react-native';

import i18n from 'i18n-js';

import {OrderDirection, useWantedQuery} from '_app/generated/graphql';
import {Card, Surface, Text, Title} from '_app/design-system';

import {s} from './styles';

export const Want = () => {
    const [wanted, setWanted] = useState([]);

    const {data, loading, error, refetch, fetchMore} = useWantedQuery({
        variables: {
            first: 25,
            orderBy: {
                direction: OrderDirection.Asc,
            },
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (data && wanted.length === 0) {
            setWanted(data.wanted.edges);
        }
    }, [data, wanted.length, refetch]);

    const renderItem = useCallback(({item}) => {
        const {name, images} = item.node;

        const placeholder = 'https://placehold.jp/30/ccc/fff/300x150.png?text=placeholder+image';
        const uri = images.length ? images[0].url : placeholder;

        return (
            <Card>
                <Card.Cover source={{uri}} />
                <Card.Content>
                    <Title>{name}</Title>
                    {/* TODO: IMPLEMENT */}
                    {/* <Paragraph>Country name</Paragraph> */}
                </Card.Content>
            </Card>
        );
    }, []);

    if (loading) {
        return (
            <Surface style={s.container}>
                <Text>{i18n.t('loading')}</Text>
            </Surface>
        );
    }

    if (error) {
        return (
            <Surface style={s.container}>
                <Text>{i18n.t('error')}</Text>
            </Surface>
        );
    }

    return (
        <Surface style={s.container}>
            <FlatList
                contentContainerStyle={s.listContainer}
                data={wanted}
                renderItem={renderItem}
                bounces={false}
                showsVerticalScrollIndicator={false}
            />
        </Surface>
    );
};
