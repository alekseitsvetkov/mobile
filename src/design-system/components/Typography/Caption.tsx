import React, {ComponentProps, ReactNode} from 'react';

import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import StyledText from './StyledText';

type Props = ComponentProps<typeof Text> & {
    style?: StyleProp<TextStyle>;
    children: ReactNode;
};

// @component-group Typography

/**
 * Typography component for showing a caption.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Caption>Caption</Caption>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Caption = (props: Props) => (
    <StyledText {...props} alpha={0.54} family="regular" style={[styles.text, props.style]} />
);

export default Caption;

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 20,
        marginVertical: 2,
        letterSpacing: 0.4,
    },
});
