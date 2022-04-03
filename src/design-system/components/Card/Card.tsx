import React, {Children, ComponentProps, ReactNode, cloneElement, isValidElement, useEffect, useRef} from 'react';

import {Animated, StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from 'react-native';

import {colord} from 'colord';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CardTitle, {CardTitle as _CardTitle} from './CardTitle';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CardCover, {CardCover as _CardCover} from './CardCover';
import CardContent from './CardContent';
import CardActions from './CardActions';

import Surface from '../Surface';
import {black, white} from '../../styles/colors';
import {withTheme} from '../../core/theming';

type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};

type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};

type HandlePressType = 'in' | 'out';

type Props = ComponentProps<typeof Surface> & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: never | number;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: 'elevated' | 'outlined';
    /**
     * Content of the `Card`.
     */
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};

/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Title, Paragraph } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" />
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Card = ({
    elevation: cardElevation = 1,
    onLongPress,
    onPress,
    mode: cardMode = 'elevated',
    children,
    style,
    theme,
    testID,
    accessible,
    ...rest
}: (OutlinedCardProps | ElevatedCardProps) & Props) => {
    // Default animated value
    const {current: elevation} = useRef<Animated.Value>(new Animated.Value(cardElevation));
    // Dark adaptive animated value, used in case of toggling the theme,
    // it prevents animating the background with native drivers inside Surface
    const {current: elevationDarkAdaptive} = useRef<Animated.Value>(new Animated.Value(cardElevation));
    const {animation, dark, mode, roundness} = theme;

    const prevDarkRef = useRef<boolean>(dark);
    useEffect(() => {
        prevDarkRef.current = dark;
    });

    const prevDark = prevDarkRef.current;
    const isAdaptiveMode = mode === 'adaptive';
    const animationDuration = 150 * animation.scale;

    useEffect(() => {
        /**
         * Resets animations values if updating to dark adaptive mode,
         * otherwise, any card that is in the middle of animation while
         * toggling the theme will stay at that animated value until
         * the next press-in
         */
        if (dark && isAdaptiveMode && !prevDark) {
            elevation.setValue(cardElevation);
            elevationDarkAdaptive.setValue(cardElevation);
        }
    }, [prevDark, dark, isAdaptiveMode, cardElevation, elevation, elevationDarkAdaptive]);

    const runElevationAnimation = (pressType: HandlePressType) => {
        const isPressTypeIn = pressType === 'in';
        if (dark && isAdaptiveMode) {
            Animated.timing(elevationDarkAdaptive, {
                toValue: isPressTypeIn ? 8 : cardElevation,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(elevation, {
                toValue: isPressTypeIn ? 8 : cardElevation,
                duration: animationDuration,
                useNativeDriver: true,
            }).start();
        }
    };

    const handlePressIn = () => {
        runElevationAnimation('in');
    };

    const handlePressOut = () => {
        runElevationAnimation('out');
    };

    const total = Children.count(children);
    const siblings = Children.map(children, (child) =>
        isValidElement(child) && child.type ? (child.type as any).displayName : null,
    );
    const borderColor = colord(dark ? white : black)
        .alpha(0.12)
        .toRgbString();
    const computedElevation = dark && isAdaptiveMode ? elevationDarkAdaptive : elevation;

    return (
        <Surface
            style={[
                {borderRadius: roundness, elevation: computedElevation, borderColor},
                cardMode === 'outlined' ? styles.outlined : {},
                style,
            ]}
            theme={theme}
            {...rest}>
            <TouchableWithoutFeedback
                delayPressIn={0}
                disabled={!(onPress || onLongPress)}
                onLongPress={onLongPress}
                onPress={onPress}
                onPressIn={onPress || onLongPress ? handlePressIn : undefined}
                onPressOut={onPress || onLongPress ? handlePressOut : undefined}
                testID={testID}
                accessible={accessible}>
                <View style={styles.innerContainer}>
                    {Children.map(children, (child, index) =>
                        isValidElement(child)
                            ? cloneElement(child, {
                                  index,
                                  total,
                                  siblings,
                              })
                            : child,
                    )}
                </View>
            </TouchableWithoutFeedback>
        </Surface>
    );
};

// @component ./CardContent.tsx
Card.Content = CardContent;
// @component ./CardActions.tsx
Card.Actions = CardActions;
// @component ./CardCover.tsx
Card.Cover = CardCover;
// @component ./CardTitle.tsx
Card.Title = CardTitle;

const styles = StyleSheet.create({
    innerContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
    outlined: {
        elevation: 0,
        borderWidth: 1,
    },
});

export default withTheme(Card);
