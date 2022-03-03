import React, {useContext, useRef} from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

import {AppContext} from '_app/context';
import {ProfileFilterItem} from '_app/components';

import {s} from './styles';

export const ProfileFilter = () => {
    const ref = useRef(null);
    const {t} = useTranslation();
    const {selectedList} = useContext(AppContext);

    return (
        <ScrollView ref={ref} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.container}>
            <ProfileFilterItem selected={selectedList} name="want" title={`${t('profile:want')}`} />
            <ProfileFilterItem selected={selectedList} name="visited" title={`${t('profile:visited')}`} />
        </ScrollView>
    );
};
