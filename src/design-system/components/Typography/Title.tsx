import * as React from 'react';

import {StyleSheet, Text, TextStyle} from 'react-native';

import StyledText from './StyledText';

type Props = React.ComponentProps<typeof Text> & {
    children: React.ReactNode;
    style?: TextStyle;
};

// @component-group Typography

/**
 * Typography component for showing a title.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Title } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Title>Title</Title>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Title = (props: Props) => (
    <StyledText {...props} alpha={0.87} family="medium" style={[styles.text, props.style]} />
);

export default Title;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
});
