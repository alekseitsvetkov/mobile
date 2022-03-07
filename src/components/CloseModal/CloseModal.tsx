import React from 'react';

import {Animated, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {navigation} from '_app/services/navigations';

const CloseModal = () => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Animated.View
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: 6,
                    paddingHorizontal: 6,
                    marginLeft: 20,
                    shadowColor: '#000000',
                    shadowOpacity: 0.15,
                    shadowRadius: 30,
                    shadowOffset: {width: 0, height: 4},
                    elevation: 6,
                }}>
                <Icon name="x" size={18} color={'#000000'} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default CloseModal;
