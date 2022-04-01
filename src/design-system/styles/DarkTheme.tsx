import {colord} from 'colord';

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
        disabled: colord(white).alpha(0.38).toRgbString(),
        placeholder: colord(white).alpha(0.54).toRgbString(),
        backdrop: colord(black).alpha(0.5).toRgbString(),
        notification: pinkA100,
        white: white,
        black: black,
    },
};

export default DarkTheme;
