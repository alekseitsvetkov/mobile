import * as React from 'react';

import {Platform, StyleSheet, Text, TextProps, ViewProps} from 'react-native';

export type IconProps = {
    name: string;
    color: string;
    size: number;
    allowFontScaling?: boolean;
};

let MaterialCommunityIcons: React.ComponentType<
    TextProps & {
        name: string;
        color: string;
        size: number;
        pointerEvents?: ViewProps['pointerEvents'];
    }
>;

try {
    // Optionally require vector-icons
    MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default;
} catch (e) {
    let isErrorLogged = false;

    // Fallback component for icons

    // TODO: type here
    MaterialCommunityIcons = ({name, color, size, ...rest}) => {
        if (!isErrorLogged) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!/(Cannot find module|Module not found|Cannot resolve module)/.test((e as any).message)) {
                console.error(e);
            }

            console.warn(
                `Tried to use the icon '${name}' in a component from '@skeetry-ui', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.`,
                `To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon.`,
            );

            isErrorLogged = true;
        }

        return (
            <Text
                {...rest}
                style={[styles.icon, {color, fontSize: size}]}
                // @ts-expect-error: Text doesn't support this, but it seems to affect TouchableNativeFeedback
                pointerEvents="none"
                selectable={false}>
                □
            </Text>
        );
    };
}

export const accessibilityProps =
    Platform.OS === 'web'
        ? {
              role: 'img',
              focusable: false,
          }
        : {
              accessibilityElementsHidden: true,
              importantForAccessibility: 'no-hide-descendants' as const,
          };

const defaultIcon = ({name, color, size, allowFontScaling}: IconProps) => (
    <MaterialCommunityIcons
        allowFontScaling={allowFontScaling}
        name={name}
        color={color}
        size={size}
        style={[
            {
                transform: [{scaleX: 1}],
                lineHeight: size,
            },
            styles.icon,
        ]}
        pointerEvents="none"
        selectable={false}
        {...accessibilityProps}
    />
);

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'transparent',
    },
});

export default defaultIcon;
