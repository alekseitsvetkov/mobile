import React from 'react';

import {Animated, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {normalize} from '_app/utils/dimensions';
import {navigation} from '_app/services/navigations';
import {colors} from '_app/constants';

const CloseModal = () => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Animated.View
                style={{
                    backgroundColor: colors.white,
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: normalize(6),
                    paddingHorizontal: normalize(6),
                    marginLeft: normalize(20),
                    shadowColor: colors.black,
                    shadowOpacity: 0.15,
                    shadowRadius: 30,
                    shadowOffset: {width: 0, height: 4},
                    elevation: 6,
                }}>
                <Icon name="x" size={18} color={colors.black} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default CloseModal;
