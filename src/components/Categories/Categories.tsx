import React, {useEffect, useState} from 'react';

import {ScrollView, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import {MOCK_CATEGORIES_DATA} from '_mocks';

import {CategoriesPlaceholder} from '_app/layout';
import {useTagsQuery} from '_app/generated/graphql';
import {tTitle} from '_app/constants';

import {s} from './styles';
import {Category} from './Category';
export const Categories = () => {
    const {t} = useTranslation();
    const [loadingCounter, setLoadingCount] = useState(0);

    const {data, loading} = useTagsQuery();

    useEffect(() => {
        if (!loading) {
            setLoadingCount(1);
        }
    }, [loading]);

    // const categories = data?.tags;

    const categories = MOCK_CATEGORIES_DATA;

    return categories && categories?.length !== 0 ? (
        <View style={s.container}>
            <Text style={[tTitle, s.title]}>{`${t('home:categories')}`}</Text>
            {loadingCounter === 0 && <CategoriesPlaceholder />}
            {loadingCounter > 0 && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categoryWrapper}>
                    {categories.map((category) => (
                        <Category key={category.id} item={category} />
                    ))}
                </ScrollView>
            )}
        </View>
    ) : null;
};
