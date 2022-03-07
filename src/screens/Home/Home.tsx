import React from 'react';

import {ScrollView, Text} from 'react-native';

import i18n from 'i18n-js';
import {MOCK_CAROUSEL_DATA} from '_mocks';

import {Categories} from '_app/components/Categories';
import {MainCarousel, MainContainer, MainSearch} from '_app/components';

export const HomeScreen = () => {
    return (
        <MainContainer safeAreaDisabled statusBarStyle="light-content">
            <ScrollView showsVerticalScrollIndicator={false}>
                <MainCarousel data={MOCK_CAROUSEL_DATA} />
                <MainSearch />
                <Categories />
                <Text>{i18n.t('welcome')}</Text>
            </ScrollView>
        </MainContainer>
    );
};
