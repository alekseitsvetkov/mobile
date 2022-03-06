import React, {FC, ReactNode, useContext} from 'react';

import {Keyboard, StatusBar, StatusBarStyle, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {Edge, SafeAreaView} from 'react-native-safe-area-context';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {DynamicStatusBar} from '_app/theme/Colors';
import {AppContext} from '_app/context';
import {colors} from '_app/constants';

export enum EDGES {
    top = 'edgesTop',
    horizontal = 'edgesHorizontal',
}
interface IProps {
    children: ReactNode;
    safeAreaDisabled?: boolean;
    statusBarStyle?: StatusBarStyle | null;
    edges?: EDGES;
    marginTop?: boolean;
}

export const MainContainer: FC<IProps> = ({
    children,
    safeAreaDisabled = false,
    statusBarStyle = null,
    edges = EDGES.top,
    marginTop = false,
}) => {
    const {theme, themeType} = useContext(AppContext);

    const {barStyle, backgroundColor} = DynamicStatusBar[themeType];

    const edgesTop: ReadonlyArray<Edge> = ['top'];

    const edgesHorizontal: ReadonlyArray<Edge> = ['top', 'bottom'];

    const content = (
        <>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={statusBarStyle ? statusBarStyle : barStyle}
            />
            <View style={[styles(theme).container, !safeAreaDisabled && styles(theme).borderTop]}>{children}</View>
        </>
    );

    return safeAreaDisabled ? (
        content
    ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView
                edges={edges === EDGES.top ? edgesTop : edgesHorizontal}
                style={[styles(theme).safeArea, marginTop && styles(theme).marginTop]}>
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
        marginTop: {
            marginTop: normalize(50),
        },
        container: {
            flex: 1,
            backgroundColor: colors.white,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
        },
        borderTop: {
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        },
    });
