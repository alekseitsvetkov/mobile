import React, {useContext} from 'react';

import {StyleSheet, Text} from 'react-native';

import {useTranslation} from 'react-i18next';

import {normalize} from '_app/utils/dimensions';
import {ThemeColors} from '_app/types/theme';
import {Typography} from '_app/theme';
import {AppContext} from '_app/context';
import {MainContainer} from '_app/components';

import {version} from '../../../package.json';

const {FontSizes, FontWeights} = Typography;

export const AboutScreen = () => {
    const {t} = useTranslation();
    const {theme} = useContext(AppContext);

    return (
        <MainContainer>
            <Text style={[styles(theme).logo]}>Skeetry</Text>
            <Text style={[styles(theme).text]}>
                {t('utils:version')}: {version}
            </Text>
        </MainContainer>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        logo: {
            ...FontSizes.Heading,
            ...FontWeights.Bold,
            color: theme.text01,
        },
        text: {
            marginTop: normalize(5),
            color: theme.text01,
        },
    });
