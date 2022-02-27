import React, {FC, ReactNode, useContext} from 'react';

import {Keyboard, StatusBar, StatusBarStyle, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {ThemeColors} from '_app/types/theme';
import {DynamicStatusBar} from '_app/theme/Colors';
import {AppContext} from '_app/context';
import {colors} from '_app/constants';

interface IProps {
    children: ReactNode;
    safeAreaDisabled?: boolean;
    statusBarStyle?: StatusBarStyle | null;
}

export const MainContainer: FC<IProps> = ({children, safeAreaDisabled = false, statusBarStyle = null}) => {
    console.log({safeAreaDisabled});

    const {theme, themeType} = useContext(AppContext);

    const {barStyle, backgroundColor} = DynamicStatusBar[themeType];

    const content = (
        <>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={statusBarStyle ? statusBarStyle : barStyle}
            />
            <View
                style={[
                    styles(theme).container,
                    !safeAreaDisabled && {
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 12,
                    },
                ]}>
                {children}
            </View>
        </>
    );

    return safeAreaDisabled ? (
        content
    ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView edges={['top']} style={styles(theme).safeArea}>
                {content}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
        },
        container: {
            flex: 1,
            backgroundColor: colors.white,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
        },
    });
