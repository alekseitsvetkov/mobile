import React, {FC, ReactNode} from 'react';

import {Keyboard, StatusBar, StatusBarStyle, TouchableWithoutFeedback, View} from 'react-native';

import {Edge, SafeAreaView} from 'react-native-safe-area-context';

import {Surface} from '_app/design-system';

import {s} from './styles';

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
    const edgesTop: ReadonlyArray<Edge> = ['top'];

    const edgesHorizontal: ReadonlyArray<Edge> = ['top', 'bottom'];

    const content = (
        <>
            <StatusBar
                animated={true}
                backgroundColor={'#000'}
                barStyle={statusBarStyle ? statusBarStyle : statusBarStyle}
            />
            <Surface style={[s.container, !safeAreaDisabled && s.borderTop]}>{children}</Surface>
        </>
    );

    return safeAreaDisabled ? (
        content
    ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView
                edges={edges === EDGES.top ? edgesTop : edgesHorizontal}
                style={[s.safeArea, marginTop && s.marginTop]}>
                {content}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};
