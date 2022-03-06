import React, {useContext} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {HandleAvailableColor, Typography} from '_app/theme';
import {AppContext} from '_app/context';
import {colors, radius} from '_app/constants';

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
    autoFocus?: boolean;
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
            autoFocus,
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
                        autoFocus={autoFocus}
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

Input.displayName = 'Input';

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        container: {
            width: '100%',
        },
        containerInput: {
            backgroundColor: colors.white,
            marginVertical: normalize(10),
            paddingHorizontal: normalize(16),
            height: normalize(40),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: radius.s,
            shadowColor: colors.black,
            shadowOpacity: 0.15,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 4},
            elevation: 6,
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
