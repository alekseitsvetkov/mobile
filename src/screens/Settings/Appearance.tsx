import React from 'react';

import {PLATFORM} from '_app/constants';
import {FormGroup, MainContainer, OptionList} from '_app/components';

export const AppearanceScreen = () => {
    const options = [
        {
            id: 1,
            name: 'Светлая',
            value: 'light',
            active: true,
        },
        {
            id: 2,
            name: 'Темная',
            value: 'dark',
        },
        {
            id: 3,
            name: `Автоматически (согласно настройкам ${PLATFORM.IS_IOS ? 'iOS' : 'Android'})`,
            value: 'auto',
        },
    ];

    return (
        <MainContainer>
            <FormGroup name="Тема">
                <OptionList options={options} />
            </FormGroup>
        </MainContainer>
    );
};
