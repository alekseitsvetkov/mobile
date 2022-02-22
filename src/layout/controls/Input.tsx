import React, {useContext} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {HandleAvailableColor, Typography} from '_app/theme';
import {AppContext} from '_app/context';
import {radius} from '_app/constants';

const {FontWeights} = Typography;

interface InputProps {
    ref: React.Ref<any>;
    label?: string;
    caption?: string;
    placeholder: string;
    value?: string;
    onChangeText: any;
    onBlur?: any;
    multiline?: boolean;
    maxLength?: number;
    children?: any;
    error?: string;
    editable?: boolean;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = React.forwardRef(
    (
        {
            label,
            caption,
            placeholder,
            value,
            onChangeText,
            onBlur,
            children,
            multiline,
            maxLength,
            error,
            editable,
            secureTextEntry,
        },
        ref,
    ) => {
        const {theme} = useContext(AppContext);
        return (
            <View style={styles(theme).container}>
                {label && <Text style={styles(theme).labelTextStyle}>{label}</Text>}
                <View style={styles(theme).containerInput}>
                    <TextInput
                        ref={ref}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles(theme).textStyle}
                        placeholder={placeholder}
                        placeholderTextColor={theme.gray02}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value || undefined}
                        multiline={multiline || false}
                        maxLength={maxLength}
                        editable={editable || true}
                        selectTextOnFocus={editable || true}
                        secureTextEntry={secureTextEntry}
                        clearButtonMode="always"
                    />
                </View>
                {children && <View>{children}</View>}
                {caption && <Text style={styles(theme).textStyle}>{caption}</Text>}
                {error && <Text style={styles(theme).errorLogin}>{error}</Text>}
            </View>
        );
    },
);

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            width: '100%',
        },
        containerInput: {
            backgroundColor: theme.background,
            marginVertical: normalize(10),
            padding: normalize(14),
            borderRadius: radius.base,
        },
        labelTextStyle: {
            ...FontWeights.Semibold,
            color: theme.gray03,
        },
        textStyle: {
            ...FontWeights.Semibold,
            color: theme.gray03,
        },
        errorLogin: {
            color: HandleAvailableColor.false,
            marginVertical: normalize(10),
            width: '100%',
            alignItems: 'center',
        },
    });

export default Input;
