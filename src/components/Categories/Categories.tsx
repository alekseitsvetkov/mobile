import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import i18n from 'i18n-js';
import {MOCK_CATEGORIES_DATA} from '_mocks';

import {useTagsQuery} from '_app/generated/graphql';

import {s} from './styles';
import {Category} from './Category';

export const Categories = () => {
    const {data, loading} = useTagsQuery();

    // const categories = data?.tags;

    const categories = MOCK_CATEGORIES_DATA;

    return categories && categories?.length !== 0 ? (
        <View style={s.container}>
            <Text style={s.title}>{i18n.t('categories')}</Text>
            {/* {loading && <CategoriesPlaceholder />} */}
            {!loading && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categoryWrapper}>
                    {categories.map((category) => (
                        <Category key={category.id} item={category} />
                    ))}
                </ScrollView>
            )}
        </View>
    ) : null;
};
