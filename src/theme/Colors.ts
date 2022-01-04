/**
 * App Colors:
 * This contains all the color config for the application
 */
import {
  HandleAvailableColorType,
  OnlineDotColorType,
  ThemeStaticType,
  ThemeType,
  ThemeVariantType,
  DynamicStatusBarType,
} from '_app/types/theme';

export const ThemeVariant: ThemeVariantType = {
  light: 'light',
  dark: 'dark',
};

export const DynamicStatusBar: DynamicStatusBarType = {
  light: {
    barStyle: 'dark-content',
    backgroundColor: '#FFFFFF',
  },
  dark: {
    barStyle: 'light-content',
    backgroundColor: '#21262d',
  },
};

export const ThemeStatic: ThemeStaticType = {
  accent: '#000000',
  white: '#FFFFFF',
  black: '#000000',
  text01: '#000000',
  text02: '#BBBBBB',
  placeholder: '#F4F4F4',
  like: '#E24359',
  unlike: '#DDD',
  translucent: 'rgba(0, 0, 0, 0.1)',
  delete: '#F44336',
  badge: '#F24',
};

export const Theme: {
  [key: string]: ThemeType;
} = {
  light: {
    type: 'light',
    colors: {
      accent: '#000000',
      base: '#FFFFFF',
      background: '#F7F7F7',
      text01: '#000000',
      text02: '#FFFFFF',
      placeholder: '#000000',
      white: '#FFFFFF',
      gray01: '#F2F2F2',
      gray02: '#C6C6C6',
      gray03: '#595959',
      gray04: '#e1e1e1',
    },
  },
  dark: {
    type: 'dark',
    colors: {
      accent: '#21262d',
      base: '#000000',
      background: '#21262d',
      text01: '#FFFFFF',
      text02: '#000000',
      placeholder: '#000000',
      white: '#FFFFFF',
      gray01: '#21262d',
      gray02: '#AAAAAA',
      gray03: '#EEEEEE',
      gray04: '#1a1e24',
    },
  },
};

export const HandleAvailableColor: HandleAvailableColorType = {
  true: '#05b714',
  false: '#EF5350',
};

export const OnlineDotColor: OnlineDotColorType = {
  true: '#4caf50',
  false: '#BBBBBB',
};

/**
 * Material Colors following material design guidelines for
 * miscellaneous colors
 */

export const MaterialColors = {
  red: {
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
  },
  purple: {
    '100': '#e1bee7',
    '200': '#ce93d8',
    '300': '#ba68c8',
    '400': '#ab47bc',
    '500': '#9c27b0',
    '600': '#8e24aa',
    '700': '#7b1fa2',
    '800': '#6a1b9a',
    '900': '#4a148c',
  },
  blue: {
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
  },
  green: {
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
  },
  yellow: {
    '100': '#fff9c4',
    '200': '#fff59d',
    '300': '#fff176',
    '400': '#ffee58',
    '500': '#ffeb3b',
    '600': '#fdd835',
    '700': '#fbc02d',
    '800': '#f9a825',
    '900': '#f57f17',
  },
  orange: {
    '100': '#ffe0b2',
    '200': '#ffcc80',
    '300': '#ffb74d',
    '400': '#ffa726',
    '500': '#ff9800',
    '600': '#fb8c00',
    '700': '#f57c00',
    '800': '#ef6c00',
    '900': '#e65100',
  },
  brown: {
    '100': '#d7ccc8',
    '200': '#bcaaa4',
    '300': '#a1887f',
    '400': '#8d6e63',
    '500': '#795548',
    '600': '#6d4c41',
    '700': '#5d4037',
    '800': '#4e342e',
    '900': '#3e2723',
  },
  grey: {
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
  },
};
