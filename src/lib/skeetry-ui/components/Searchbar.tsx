import React, {ComponentPropsWithRef, forwardRef, useImperativeHandle, useRef} from 'react';

import {Platform, StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {CloseCircle, SearchNormal1} from 'iconsax-react-native';
import color from 'color';

import Surface from './Surface';
import IconButton from './IconButton';

import {withTheme} from '../core/theming';

import type {IconSource} from './Icon';

type TProps = ComponentPropsWithRef<typeof TextInput> & {
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    clearAccessibilityLabel?: string;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    searchAccessibilityLabel?: string;
    /**
     * Hint text shown when the input is empty.
     */
    placeholder?: string;
    /**
     * The value of the text input.
     */
    value: string;
    /**
     * Icon name for the left icon button (see `onIconPress`).
     */
    icon?: IconSource;
    /**
     * Callback that is called when the text input's text changes.
     */
    onChangeText?: (query: string) => void;
    /**
     * Callback to execute if we want the left icon to act as button.
     */
    onIconPress?: () => void;
    /**
     * Set style of the TextInput component inside the searchbar
     */
    inputStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;

    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
    /**
     * Custom color for icon, default will be derived from theme
     */
    iconColor?: string;
    /**
     * Custom icon for clear button, default will be icon close
     */
    clearIcon?: IconSource;
};

type TextInputHandles = Pick<TextInput, 'setNativeProps' | 'isFocused' | 'clear' | 'blur' | 'focus'>;

/**
 * Searchbar is a simple input box where users can type search queries.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/searchbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Searchbar } from '@skeetry-ui';
 *
 * const MyComponent = () => {
 *   const [searchQuery, setSearchQuery] = React.useState('');
 *
 *   const onChangeSearch = query => setSearchQuery(query);
 *
 *   return (
 *     <Searchbar
 *       placeholder="Search"
 *       onChangeText={onChangeSearch}
 *       value={searchQuery}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Searchbar = forwardRef<TextInputHandles, TProps>(
    (
        {
            clearAccessibilityLabel = 'clear',
            clearIcon,
            icon,
            iconColor: customIconColor,
            inputStyle,
            onIconPress,
            placeholder,
            searchAccessibilityLabel = 'search',
            style,
            theme,
            value,
            ...rest
        }: TProps,
        ref,
    ) => {
        const root = useRef<TextInput>(null);

        useImperativeHandle(ref, () => {
            const input = root.current;

            if (input) {
                return {
                    focus: () => input.focus(),
                    clear: () => input.clear(),
                    setNativeProps: (args: TextInputProps) => input.setNativeProps(args),
                    isFocused: () => input.isFocused(),
                    blur: () => input.blur(),
                };
            }

            const noop = () => {
                throw new Error('TextInput is not available');
            };

            return {
                focus: noop,
                clear: noop,
                setNativeProps: noop,
                isFocused: noop,
                blur: noop,
            };
        });

        const handleClearPress = () => {
            root.current?.clear();
            rest.onChangeText?.('');
        };

        const {colors, roundness, dark, fonts} = theme;
        const textColor = colors.text;
        const font = fonts.regular;
        const iconColor = customIconColor || (dark ? textColor : color(textColor).alpha(0.54).rgb().string());

        return (
            <Surface
                withShadow
                style={[
                    {borderRadius: roundness, elevation: 6, backgroundColor: colors.background},
                    styles.container,
                    style,
                ]}>
                <IconButton
                    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
                    accessibilityTraits="button"
                    accessibilityComponentType="button"
                    accessibilityRole="button"
                    borderless
                    onPress={onIconPress}
                    color={iconColor}
                    icon={icon || (({size, color}) => <SearchNormal1 size={size} variant="Outline" color={color} />)}
                    accessibilityLabel={searchAccessibilityLabel}
                />
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: textColor,
                            ...font,
                            ...Platform.select({web: {outline: 'none'}}),
                        },
                        inputStyle,
                    ]}
                    placeholder={placeholder || ''}
                    placeholderTextColor={colors.placeholder}
                    selectionColor={colors.primary}
                    underlineColorAndroid="transparent"
                    returnKeyType="search"
                    keyboardAppearance={dark ? 'dark' : 'light'}
                    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
                    accessibilityTraits="search"
                    accessibilityRole="search"
                    ref={root}
                    value={value}
                    {...rest}
                />
                <IconButton
                    disabled={!value}
                    accessibilityLabel={clearAccessibilityLabel}
                    color={value ? iconColor : 'rgba(255, 255, 255, 0)'}
                    onPress={handleClearPress}
                    icon={clearIcon || (({size, color}) => <CloseCircle size={size} variant="Bold" color={color} />)}
                    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
                    accessibilityTraits="button"
                    accessibilityComponentType="button"
                    accessibilityRole="button"
                />
            </Surface>
        );
    },
);

Searchbar.displayName = 'Searchbar';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingLeft: 6,
        alignSelf: 'stretch',
        textAlign: 'left',
        minWidth: 0,
    },
});

export default withTheme(Searchbar);
