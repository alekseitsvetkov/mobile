import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { ProfileFilterItem } from '_app/components';
import { AppContext } from '_app/context';

import { s } from './styles';

export const ProfileFilter = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { selectedList } = useContext(AppContext);

  return (
    <ScrollView ref={ref} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.container}>
      <ProfileFilterItem selected={selectedList} name="want" title={`${t('profile:want')}`} />
      <ProfileFilterItem selected={selectedList} name="visited" title={`${t('profile:visited')}`} />
      <ProfileFilterItem selected={selectedList} name="moments" title={`${t('profile:moments')}`} />
    </ScrollView>
  );
};
