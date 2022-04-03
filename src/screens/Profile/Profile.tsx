import React, {useRef} from 'react';

import {Animated, ImageBackground, View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import i18n from 'i18n-js';
import {BlurView} from 'expo-blur';
import dayjs from 'dayjs';

import {signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {useMeQuery} from '_app/generated/graphql';
import {Surface, Text, useTheme} from '_app/design-system';
import {Avatar, MainContainer, ProfileTabs, UserInfo} from '_app/components';

import {s} from './styles';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
require('dayjs/locale/es');
require('dayjs/locale/ru');

const logOut = () => {
    signOut();
    navigation.navigate('Auth');
};

export const HEADER_HEIGHT_EXPANDED = 35;
const HEADER_HEIGHT_NARROWED = 90;

const PROFILE_BANNER_URI =
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

// const currentLocale = i18n.currentLocale().split('-')[0];

export const ProfileScreen = () => {
    const {
        loading,
        data,
        error,
        //refetch
    } = useMeQuery();
    const insets = useSafeAreaInsets();
    const scrollY = useRef(new Animated.Value(0)).current;
    const {colors} = useTheme();

    const user = data?.me;

    if (error) {
        logOut();
    }

    if (loading) {
        return (
            <MainContainer statusBarStyle="light-content">
                <View>
                    <Text>Loading</Text>
                </View>
            </MainContainer>
        );
    }

    if (!user) {
        logOut();
    }

    // TODO: NEED TO SEPARATE
    return (
        // TODO: DELETE WHEN ADDED LOGOUT
        // <MainContainer marginTop statusBarStyle="light-content">
        //     <UserInfo user={user} />
        //     <TouchableWithoutFeedback onPress={() => logOut()}>
        //         <Text style={{paddingHorizontal: 16}}>{i18n.t('logout')}</Text>
        //     </TouchableWithoutFeedback>
        // </MainContainer>
        <MainContainer safeAreaDisabled statusBarStyle="light-content">
            <View style={s.container}>
                <View style={[s.settings, {top: insets.top}]}>
                    <Feather name="settings" color="white" size={16} />
                </View>
                <Animated.View
                    style={[
                        s.refresh,
                        {
                            top: insets.top + 6,
                            opacity: scrollY.interpolate({
                                inputRange: [-20, 0],
                                outputRange: [1, 0],
                            }),
                            transform: [
                                {
                                    rotate: scrollY.interpolate({
                                        inputRange: [-45, -35],
                                        outputRange: ['180deg', '0deg'],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}>
                    <Feather name="arrow-down" color="white" size={25} />
                </Animated.View>
                <Animated.View
                    style={[
                        s.nameContainer,
                        {
                            top: insets.top + 6,
                            opacity: scrollY.interpolate({
                                inputRange: [90, 110],
                                outputRange: [0, 1],
                            }),
                            transform: [
                                {
                                    translateY: scrollY.interpolate({
                                        inputRange: [90, 120],
                                        outputRange: [30, 0],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}>
                    <Text style={[s.name, {color: colors.white}]}>{user?.name}</Text>
                </Animated.View>
                <AnimatedImageBackground
                    source={{
                        uri: PROFILE_BANNER_URI,
                    }}
                    style={[
                        s.banner,
                        {
                            height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
                            transform: [
                                {
                                    scale: scrollY.interpolate({
                                        inputRange: [-200, 0],
                                        outputRange: [5, 1],
                                        extrapolateLeft: 'extend',
                                        extrapolateRight: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}>
                    <AnimatedBlurView
                        tint="dark"
                        intensity={70}
                        style={[
                            s.bannerOverlay,
                            {
                                opacity: scrollY.interpolate({
                                    inputRange: [-50, 0, 50, 100],
                                    outputRange: [1, 0, 0, 1],
                                }),
                            },
                        ]}
                    />
                </AnimatedImageBackground>
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {y: scrollY},
                                },
                            },
                        ],
                        {useNativeDriver: true},
                    )}
                    style={[
                        s.scrollContainer,
                        {
                            marginTop: HEADER_HEIGHT_NARROWED,
                            paddingTop: HEADER_HEIGHT_EXPANDED,
                        },
                    ]}>
                    <Surface style={s.container}>
                        <View style={[s.container, s.userInfoContainer]}>
                            <Avatar
                                uri={user?.avatar}
                                innerStyle={{
                                    ...s.avatarContainer,
                                    borderColor: colors.background,
                                    transform: [
                                        {
                                            scale: scrollY.interpolate({
                                                inputRange: [0, HEADER_HEIGHT_EXPANDED],
                                                outputRange: [1, 0.6],
                                                extrapolate: 'clamp',
                                            }),
                                        },
                                        {
                                            translateY: scrollY.interpolate({
                                                inputRange: [0, HEADER_HEIGHT_EXPANDED],
                                                outputRange: [0, 16],
                                                extrapolate: 'clamp',
                                            }),
                                        },
                                    ],
                                }}
                            />
                            {!!user && <UserInfo user={user} />}
                        </View>

                        <View style={s.container}>
                            <View style={s.tabsContainer}>
                                <ProfileTabs />
                            </View>
                        </View>
                    </Surface>
                </Animated.ScrollView>
            </View>
        </MainContainer>
    );
};
