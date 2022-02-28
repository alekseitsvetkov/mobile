import React from 'react';

import {MOCK_CAROUSEL_DATA} from '_mocks';

import {MainCarousel, MainContainer} from '_app/components';

export const HomeScreen = () => {
    return (
        <MainContainer safeAreaDisabled statusBarStyle="dark-content">
            <MainCarousel data={MOCK_CAROUSEL_DATA} />
        </MainContainer>
    );
};
