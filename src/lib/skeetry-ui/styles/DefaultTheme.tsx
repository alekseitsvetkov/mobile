import color from 'color';

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
        disabled: color(black).alpha(0.26).rgb().string(),
        placeholder: color(black).alpha(0.54).rgb().string(),
        backdrop: color(black).alpha(0.5).rgb().string(),
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
