import React, {useContext} from 'react';

import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {ThemeColors} from '_app/types/theme';
import {Typography} from '_app/theme';
import {LoadingIndicator} from '_app/layout';
import {AppContext} from '_app/context';
import {radius} from '_app/constants';

const {FontWeights, FontSizes} = Typography;

interface ButtonProps {
    Icon?: React.FC;
    label: string;
    onPress: any;
    loading: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    indicatorColor?: string;
}

const Button: React.FC<ButtonProps> = ({Icon, label, onPress, loading, containerStyle, labelStyle, indicatorColor}) => {
    const {theme} = useContext(AppContext);

    let content = <LoadingIndicator size={6} color={indicatorColor || theme.white} />;
    if (!loading)
        content = (
            <>
                {Icon && <Icon />}
                <Text style={[styles(theme).label, labelStyle]}>{label}</Text>
            </>
        );

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles(theme).container, containerStyle]}>
            {content}
        </TouchableOpacity>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            height: 40,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: radius.base,
            backgroundColor: theme.accent,
        },
        label: {
            ...FontWeights.Semibold,
            ...FontSizes.Caption,
            marginLeft: 5,
            color: theme.white,
        },
    });

export default Button;
