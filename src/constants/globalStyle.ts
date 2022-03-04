import {TextStyle} from 'react-native';

import {MapStyleElement} from 'react-native-maps';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

import {normalize} from '_app/utils/dimensions';

export const radius = {
    s: 10,
    base: 12,
    l: 18,
    full: 100,
};

export const fontFamily = {
    black: 'Inter_900Black',
    bold: 'Inter_700Bold',
    extraBold: 'Inter_800ExtraBold',
    extraLight: 'Inter_200ExtraLight',
    light: 'Inter_300Light',
    medium: 'Inter_500Medium',
    regular: 'Inter_400Regular',
    semiBold: 'Inter_600SemiBold',
    thin: 'Inter_100Thin',
};

export const fontSize = {
    xxxl: 30,
    xxl: 24,
    xl: 20,
    lg: 18,
    base: 16,
    sm: 14,
    xs: 12,
};

// TODO: add green, red, yellow colors
export const colors = {
    white: '#fff',
    black: '#000',
    text: '#000',
    lineGray: '#F2F2F2',
    lightGray: '#F7F7F7',
    mainGray: '#EEEEEE',
    mediumGray: '#595959',
    baseGray: '#C6C6C6',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
};

export const colorsDark = {
    black: '#1E1E1E',
    white: '#fff',
};

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.black,
    },
};

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: colors.black,
    },
};

const textBase: TextStyle = {
    fontFamily: fontFamily.semiBold,
};

export const tSplash: TextStyle = {
    ...textBase,
    lineHeight: 36,
    fontSize: fontSize.xxxl,
    fontWeight: '700',
};

export const tLogo: TextStyle = {
    ...textBase,
    lineHeight: 30,
    fontSize: fontSize.xxl,
    fontWeight: '700',
};

export const tHStep: TextStyle = {
    ...textBase,
    lineHeight: 22,
    fontSize: fontSize.lg,
    fontWeight: '400',
};

export const tDStep: TextStyle = {
    ...textBase,
    lineHeight: 18,
    fontSize: fontSize.sm,
    fontWeight: '400',
};

export const tButton: TextStyle = {
    ...textBase,
    fontWeight: '600',
    fontSize: fontSize.sm,
    lineHeight: 18,
};

export const tInput: TextStyle = {
    ...textBase,
    fontWeight: '500',
    fontSize: fontSize.sm,
    lineHeight: 18,
};

export const tBase: TextStyle = {
    ...textBase,
    fontWeight: '400',
    fontSize: fontSize.sm,
    lineHeight: 18,
};

export const tTitle: TextStyle = {
    ...textBase,
    fontWeight: '700',
    fontSize: fontSize.base,
    lineHeight: 24,
};

export const tSmall: TextStyle = {
    ...textBase,
    fontWeight: '500',
    fontSize: fontSize.xs,
    lineHeight: 16,
};

export const tSmallRegular: TextStyle = {
    ...textBase,
    fontWeight: '400',
    fontSize: fontSize.xs,
    lineHeight: 16,
};

export const tSmallSemibold: TextStyle = {
    ...tSmall,
    fontWeight: '600',
};

export const avatarSize = normalize(70);

export const mapGfxStyle: MapStyleElement[] = [
    {
        elementType: 'geometry',
        stylers: [
            {
                color: '#f5f5f5',
            },
        ],
    },
    {
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on',
                color: '#000',
                invert_lightness: true,
            },
        ],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#616161',
            },
        ],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#f5f5f5',
            },
        ],
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#bdbdbd',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            {
                color: '#eeeeee',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#757575',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#e5e5e5',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#757575',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#dadada',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#616161',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e',
            },
        ],
    },
    {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
            {
                color: '#e5e5e5',
            },
        ],
    },
    {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
            {
                color: '#eeeeee',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#c9c9c9',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e',
            },
        ],
    },
];

export type IconSizesType = {
    x00: number;
    x0: number;
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
    x9: number;
    x10: number;
    x11: number;
    x12: number;
};

export const IconSizes: IconSizesType = {
    x00: 4,
    x0: 6,
    x1: 10,
    x2: 12,
    x3: 14,
    x4: 16,
    x5: 20,
    x6: 24,
    x7: 28,
    x8: 32,
    x9: 40,
    x10: 50,
    x11: 60,
    x12: 100,
};

export const ACTIVE_OPACITY = 0.6;
