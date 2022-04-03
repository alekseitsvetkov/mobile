import * as React from 'react';

import {StyleProp, StyleSheet, TextStyle} from 'react-native';

import {colord} from 'colord';

import Text from './Text';

import {withTheme} from '../../core/theming';

type Props = React.ComponentProps<typeof Text> & {
    alpha: number;
    family: 'regular' | 'medium' | 'light' | 'thin';
    style?: StyleProp<TextStyle>;
    theme: SkeetryUI.Theme;
};

const StyledText = ({theme, alpha, family, style, ...rest}: Props) => {
    const textColor = colord(theme.colors.text).alpha(alpha).toRgbString();
    const font = theme.fonts[family];

    return <Text {...rest} style={[styles.text, {color: textColor, ...font}, style]} />;
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
});

export default withTheme(StyledText);
