import {Platform, PlatformOSType} from 'react-native';

import type {Fonts} from '../types';

const fontConfig = {
    web: {
        regular: {
            fontFamily: 'Inter',
            fontWeight: '400' as const,
        },
        medium: {
            fontFamily: 'Inter',
            fontWeight: '500' as const,
        },
        light: {
            fontFamily: 'Inter',
            fontWeight: '300' as const,
        },
        thin: {
            fontFamily: 'Inter',
            fontWeight: '100' as const,
        },
    },
    ios: {
        regular: {
            fontFamily: 'System',
            fontWeight: '400' as const,
        },
        medium: {
            fontFamily: 'System',
            fontWeight: '500' as const,
        },
        light: {
            fontFamily: 'System',
            fontWeight: '300' as const,
        },
        thin: {
            fontFamily: 'System',
            fontWeight: '100' as const,
        },
    },
    default: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal' as const,
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal' as const,
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal' as const,
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal' as const,
        },
    },
};

export default function configureFonts(config?: {[platform in PlatformOSType | 'default']?: Fonts}): Fonts {
    const fonts = Platform.select({...fontConfig, ...config}) as Fonts;
    return fonts;
}
