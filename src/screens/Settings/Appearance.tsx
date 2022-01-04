import React from 'react';

import { FormGroup, OptionList, SafeAreaWrapper } from '_app/components';
import { PLATFORM } from '_app/constants';

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
    <SafeAreaWrapper>
      <FormGroup name="Тема">
        <OptionList options={options} />
      </FormGroup>
    </SafeAreaWrapper>
  );
};
