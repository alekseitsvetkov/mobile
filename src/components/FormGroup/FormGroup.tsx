import React from 'react';

import {Text, View} from 'react-native';

export const FormGroup = ({name, children}) => {
    return (
        <View>
            <Text>{name}</Text>
            {children}
        </View>
    );
};
