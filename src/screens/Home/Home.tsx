import React from 'react';

import {ScrollView} from 'react-native';

import {MOCK_CAROUSEL_DATA} from '_mocks';

import {Categories} from '_app/components/Categories';
import {MainCarousel, MainContainer, MainSearch} from '_app/components';

export const HomeScreen = () => {
    return (
        <MainContainer safeAreaDisabled statusBarStyle="dark-content">
            <ScrollView showsVerticalScrollIndicator={false}>
                <MainCarousel data={MOCK_CAROUSEL_DATA} />
                <MainSearch />
                <Categories />
            </ScrollView>
        </MainContainer>
    );
};
