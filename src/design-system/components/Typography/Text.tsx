import React, {ComponentProps, RefForwardingComponent, forwardRef, useImperativeHandle, useRef} from 'react';

import {Text as NativeText, StyleProp, StyleSheet, TextStyle} from 'react-native';

import {withTheme} from '../../core/theming';

type Props = ComponentProps<typeof NativeText> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
};

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text: RefForwardingComponent<{}, Props> = ({style, theme, ...rest}: Props, ref) => {
    const root = useRef<NativeText | null>(null);

    useImperativeHandle(ref, () => ({
        setNativeProps: (args: Object) => root.current?.setNativeProps(args),
    }));

    return (
        <NativeText
            {...rest}
            ref={root}
            style={[
                {
                    ...theme.fonts.regular,
                    color: theme.colors.text,
                },
                styles.text,
                style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
});

export default withTheme(forwardRef(Text));
