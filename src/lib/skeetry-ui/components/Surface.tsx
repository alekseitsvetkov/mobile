import * as React from 'react';

import {Animated, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import shadow from '../styles/shadow';
import overlay from '../styles/overlay';
import {withTheme} from '../core/theming';

type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `Surface`.
     */
    children: React.ReactNode;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    withShadow?: boolean;
    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
};

/**
 * Surface is a basic container that can give depth to an element with elevation shadow.
 * On dark theme with `adaptive` mode, surface is constructed by also placing a semi-transparent white overlay over a component surface.
 * Overlay and shadow can be applied by specifying the `elevation` property both on Android and iOS.
 *
 * <div class="screenshots">
 *   <img src="screenshots/surface-1.png" />
 *   <img src="screenshots/surface-2.png" />
 *   <img src="screenshots/surface-3.png" />
 * </div>
 *
 * <div class="screenshots">
 *   <img src="screenshots/surface-dark-1.png" />
 *   <img src="screenshots/surface-dark-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Surface, Text } from '@skeetry-ui';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *   <Surface style={styles.surface}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *     elevation: 4,
 *   },
 * });
 * ```
 */
const Surface = ({style, theme, withShadow = false, ...rest}: Props) => {
    const {elevation = 6} = (StyleSheet.flatten(style) || {}) as ViewStyle;
    const {dark: isDarkTheme, mode, colors} = theme;
    return (
        <Animated.View
            {...rest}
            style={[
                {
                    backgroundColor:
                        isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.surface,
                },
                withShadow && shadow(),
                style,
            ]}
        />
    );
};

export default withTheme(Surface);
