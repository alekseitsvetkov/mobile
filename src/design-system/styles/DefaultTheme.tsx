import {colord} from 'colord';

import configureFonts from './fonts';
import {black, pinkA400, white} from './colors';

import type {Theme} from '../types';

const DefaultTheme: Theme = {
    dark: false,
    roundness: 8,
    colors: {
        primary: black,
        accent: '#03dac4',
        background: white,
        surface: white,
        error: '#B00020',
        text: black,
        onSurface: black,
        disabled: colord(black).alpha(0.26).toRgbString(),
        placeholder: colord(black).alpha(0.54).toRgbString(),
        backdrop: colord(black).alpha(0.5).toRgbString(),
        notification: pinkA400,
        white: white,
        black: black,
    },
    fonts: configureFonts(),
    animation: {
        scale: 1.0,
    },
};

export default DefaultTheme;
