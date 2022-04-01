import * as React from 'react';

import {Image, ImageSourcePropType, Platform} from 'react-native';

import {accessibilityProps} from './MaterialCommunityIcon';

import {withTheme} from '../core/theming';
import {Consumer as SettingsConsumer} from '../core/settings';

type IconSourceBase = string | ImageSourcePropType;

export type IconSource =
    | IconSourceBase
    | Readonly<{source: IconSourceBase}>
    | ((props: IconProps & {color: string}) => React.ReactNode);

type IconProps = {
    size: number;
    allowFontScaling?: boolean;
};

type Props = IconProps & {
    color?: string;
    // TODO: type here
    source: any;
    /**
     * @optional
     */
    theme: SkeetryUI.Theme;
};

// TODO: type here
const isImageSource = (source: any) =>
    // source is an object with uri
    (typeof source === 'object' &&
        source !== null &&
        Object.prototype.hasOwnProperty.call(source, 'uri') &&
        typeof source.uri === 'string') ||
    // source is a module, e.g. - require('image')
    typeof source === 'number' ||
    // image url on web
    (Platform.OS === 'web' &&
        typeof source === 'string' &&
        (source.startsWith('data:image') || /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source)));

// TODO: type here
const getIconId = (source: any) => {
    if (
        typeof source === 'object' &&
        source !== null &&
        Object.prototype.hasOwnProperty.call(source, 'uri') &&
        typeof source.uri === 'string'
    ) {
        return source.uri;
    }

    return source;
};

// TODO: type here
export const isValidIcon = (source: any) =>
    typeof source === 'string' || typeof source === 'function' || isImageSource(source);

// TODO: type here
export const isEqualIcon = (a: any, b: any) => a === b || getIconId(a) === getIconId(b);

const Icon = ({source, color, size, theme, ...rest}: Props) => {
    const s = typeof source === 'object' && source.source ? source.source : source;
    const iconColor = color || theme.colors.text;

    if (isImageSource(s)) {
        return (
            <Image
                {...rest}
                source={s}
                style={[
                    {
                        transform: [{scaleX: 1}],
                    },
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                        width: size,
                        height: size,
                        tintColor: color,
                        resizeMode: 'contain',
                    },
                ]}
                {...accessibilityProps}
            />
        );
    } else if (typeof s === 'string') {
        return (
            <SettingsConsumer>
                {({icon}) => {
                    return icon({
                        name: s,
                        color: iconColor,
                        size,
                    });
                }}
            </SettingsConsumer>
        );
    } else if (typeof s === 'function') {
        return s({color: iconColor, size});
    }

    return null;
};

export default withTheme(Icon);
