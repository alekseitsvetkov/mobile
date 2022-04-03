import React, {ComponentPropsWithRef} from 'react';

import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {grey200} from '../../styles/colors';
import {withTheme} from '../../core/theming';

type Props = ComponentPropsWithRef<typeof Image> & {
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
};

/**
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = ({style, theme, ...rest}: Props) => {
    const {roundness} = theme;

    const coverStyle = {
        borderRadius: roundness,
    };

    return (
        <View style={[styles.container, coverStyle, style]}>
            <Image {...rest} style={[styles.image, coverStyle]} />
        </View>
    );
};

CardCover.displayName = 'Card.Cover';
const styles = StyleSheet.create({
    container: {
        height: 195,
        backgroundColor: grey200,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        padding: 16,
        justifyContent: 'flex-end',
    },
});

export default withTheme(CardCover);

// @component-docs ignore-next-line
export {CardCover};
