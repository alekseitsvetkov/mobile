import {extendTheme} from 'native-base';

const colorTheme = {
    primary: {
        // DEFAULT NATIVEBASE PRIMARY
        // 50: '#E3F2F9',
        // 100: '#C5E4F3',
        // 200: '#A2D4EC',
        // 300: '#7AC1E4',
        // 400: '#47A9DA',
        // 500: '#0088CC',
        // 600: '#007AB8',
        // 700: '#006BA1',
        // 800: '#005885',
        // 900: '#003F5E',
        50: '#000000',
        100: '#000000',
        200: '#000000',
        300: '#000000',
        400: '#000000',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
    },
};

const fontConfig = {
    Inter: {
        100: {
            normal: 'Inter_100Thin',
        },
        200: {
            normal: 'Inter_200ExtraLight',
        },
        300: {
            normal: 'Inter_300Light',
        },
        400: {
            normal: 'Inter_400Regular',
        },
        500: {
            normal: 'Inter_500Medium',
        },
        600: {
            normal: 'Inter_600SemiBold',
        },
        700: {
            normal: 'Inter_700Bold',
        },
        800: {
            normal: 'Inter_800ExtraBold',
        },
        900: {
            normal: 'Inter_900Black',
        },
    },
};

const fonts = {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
};

export const theme = extendTheme({colors: colorTheme, fontConfig, fonts});
