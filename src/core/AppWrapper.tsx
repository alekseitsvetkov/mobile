import React from 'react';

import {Dimensions} from 'react-native';

import RootStackNavigation from '_app/navigations';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const AppWrapper = (): JSX.Element => {
    return <RootStackNavigation />;
};

export {AppWrapper, SCREEN_WIDTH, SCREEN_HEIGHT};
