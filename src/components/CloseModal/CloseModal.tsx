import React from 'react';

import {TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {navigation} from '_app/services/navigations';
import {Surface, useTheme} from '_app/design-system';

const CloseModal = () => {
    const {colors} = useTheme();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Surface
                withShadow
                style={{
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: 6,
                    paddingHorizontal: 6,
                    marginLeft: 20,
                }}>
                <Icon name="x" size={18} color={colors.primary} />
            </Surface>
        </TouchableWithoutFeedback>
    );
};

export default CloseModal;
