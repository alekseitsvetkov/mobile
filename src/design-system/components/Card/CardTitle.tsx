import React, {ComponentPropsWithRef, ReactNode} from 'react';

import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import Title from './../Typography/Title';
import Caption from './../Typography/Caption';

import {withTheme} from '../../core/theming';

type Props = ComponentPropsWithRef<typeof View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {size: number}) => ReactNode;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {size: number}) => ReactNode;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
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

const LEFT_SIZE = 40;

/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardTitle = ({
    title,
    titleStyle,
    titleNumberOfLines = 1,
    subtitle,
    subtitleStyle,
    subtitleNumberOfLines = 1,
    left,
    leftStyle,
    right,
    rightStyle,
    style,
}: Props) => {
    return (
        <View style={[styles.container, {minHeight: subtitle || left || right ? 72 : 50}, style]}>
            {left ? (
                <View style={[styles.left, leftStyle]}>
                    {left({
                        size: LEFT_SIZE,
                    })}
                </View>
            ) : null}

            <View style={[styles.titles]}>
                {title ? (
                    <Title
                        style={[styles.title, {marginBottom: subtitle ? 0 : 2}, titleStyle]}
                        numberOfLines={titleNumberOfLines}>
                        {title}
                    </Title>
                ) : null}

                {subtitle ? (
                    <Caption style={[styles.subtitle, subtitleStyle]} numberOfLines={subtitleNumberOfLines}>
                        {subtitle}
                    </Caption>
                ) : null}
            </View>

            <View style={rightStyle}>{right ? right({size: 24}) : null}</View>
        </View>
    );
};

CardTitle.displayName = 'Card.Title';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
    },

    left: {
        justifyContent: 'center',
        marginRight: 16,
        height: LEFT_SIZE,
        width: LEFT_SIZE,
    },

    titles: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    title: {
        minHeight: 30,
        paddingRight: 16,
    },

    subtitle: {
        minHeight: 20,
        marginVertical: 0,
        paddingRight: 16,
    },
});

export default withTheme(CardTitle);

// @component-docs ignore-next-line
export {CardTitle};
