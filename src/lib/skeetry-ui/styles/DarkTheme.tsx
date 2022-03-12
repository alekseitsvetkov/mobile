import color from 'color';

import DefaultTheme from './DefaultTheme';
import {black, pinkA100, white} from './colors';

import type {Theme} from '../types';

const DarkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
        ...DefaultTheme.colors,
        primary: white,
        accent: '#03dac6',
        background: '#2B2B2B',
        surface: '#1E1E1E',
        error: '#CF6679',
        onSurface: white,
        text: white,
        disabled: color(white).alpha(0.38).rgb().string(),
        placeholder: color(white).alpha(0.54).rgb().string(),
        backdrop: color(black).alpha(0.5).rgb().string(),
        notification: pinkA100,
        white: white,
        black: black,
    },
};

export default DarkTheme;
