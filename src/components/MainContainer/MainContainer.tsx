import React, {FC, ReactNode, useContext} from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';
import {colors} from '_app/constants';

interface IProps {
    children: ReactNode;
    safeAreaDisabled?: boolean;
}

export const MainContainer: FC<IProps> = ({children, safeAreaDisabled = false}) => {
    const {theme} = useContext(AppContext);

    const content = (
        <>
            <StatusBar
                animated={true}
                backgroundColor={colors.black}
                barStyle={'light-content'}
                showHideTransition={'fade'}
            />
            <View style={styles(theme).container}>{children}</View>
        </>
    );

    return safeAreaDisabled ? (
        content
    ) : (
        <SafeAreaView edges={['top']} style={styles(theme).safeArea}>
            {content}
        </SafeAreaView>
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
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        },
    });
