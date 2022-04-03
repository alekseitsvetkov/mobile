import {createTheming} from '@callstack/react-theme-provider';

import DefaultTheme from '../styles/DefaultTheme';

export const {ThemeProvider, withTheme, useTheme} = createTheming<SkeetryUI.Theme>(DefaultTheme as SkeetryUI.Theme);
