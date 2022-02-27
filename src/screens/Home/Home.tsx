import React from 'react';

import {Image, ScrollView} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {SCREEN_WIDTH} from '_app/core';
import {MainContainer} from '_app/components';

export const HomeScreen = () => {
    return (
        <MainContainer safeAreaDisabled statusBarStyle="dark-content">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1838&q=80',
                        width: SCREEN_WIDTH,
                        height: normalize(350),
                    }}
                />
            </ScrollView>
        </MainContainer>
    );
};
