import React from 'react';

import {ScrollView} from 'react-native';

import {Box} from 'native-base';
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
                <Box>Hello world</Box>
            </ScrollView>
        </MainContainer>
    );
};
