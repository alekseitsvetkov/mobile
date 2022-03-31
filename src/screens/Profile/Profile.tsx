import React, {useRef} from 'react';

import {
    Animated,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Calendar, Location, Verify} from 'iconsax-react-native';
import i18n from 'i18n-js';
import {BlurView} from 'expo-blur';
import dayjs from 'dayjs';

import {SCREEN_HEIGHT, signOut} from '_app/utils';
import {navigation} from '_app/services/navigations';
import {useMeQuery} from '_app/generated/graphql';
import {Surface, Text, useTheme} from '_app/design-system';
import {ACTIVE_OPACITY, APP_COLORS, DEFAULT_OPACITY} from '_app/constants';
import {Avatar, EDGES, MainContainer, ProfileTabs, UserInfo} from '_app/components';

import {s} from './styles';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
require('dayjs/locale/es');
require('dayjs/locale/ru');

const logOut = () => {
    signOut();
    navigation.navigate('Auth');
};

function generateTweets(limit) {
    return new Array(limit).fill(0).map((_, index) => {
        return {
            key: index.toString(),
            text: 'Demo text for generate large list',
        };
    });
}

const TWEETS = generateTweets(45);
export const HEADER_HEIGHT_EXPANDED = 35;
const HEADER_HEIGHT_NARROWED = 90;

const PROFILE_BANNER_URI =
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80';
const PROFILE_PICTURE_URI = 'https://avatars.githubusercontent.com/u/7137819?v=4';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const currentLocale = i18n.currentLocale().split('-')[0];

export const ProfileScreen = () => {
    const {loading, data, error, refetch} = useMeQuery();
    const insets = useSafeAreaInsets();
    const scrollY = useRef(new Animated.Value(0)).current;
    const {colors} = useTheme();

    const user = data?.me;

    if (error) {
        logOut();
    }

    if (loading) {
        // TODO: something here
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

    return (
        // <MainContainer marginTop statusBarStyle="light-content">
        //     <UserInfo user={user} />
        //     <TouchableWithoutFeedback onPress={() => logOut()}>
        //         <Text style={{paddingHorizontal: 16}}>{i18n.t('logout')}</Text>
        //     </TouchableWithoutFeedback>
        // </MainContainer>
        <MainContainer safeAreaDisabled statusBarStyle="light-content">
            <View style={s.container}>
                {/* Settings button */}
                <View
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        top: insets.top,
                        right: 20,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Feather name="settings" color="white" size={16} />
                </View>

                {/* Refresh arrow */}
                <Animated.View
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        top: insets.top + 6,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
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
                    }}>
                    <Feather name="arrow-down" color="white" size={25} />
                </Animated.View>

                {/* Name + tweets count */}
                <Animated.View
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        top: insets.top + 6,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
                        paddingBottom: 16,
                        overflow: 'hidden',
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
                    }}>
                    <Text style={[s.text, s.username]}>Aleksey Tsvetkov</Text>
                </Animated.View>

                {/* Banner */}
                <AnimatedImageBackground
                    source={{
                        uri: PROFILE_BANNER_URI,
                    }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
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
                    }}>
                    <AnimatedBlurView
                        tint="dark"
                        intensity={96}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            zIndex: 2,
                            opacity: scrollY.interpolate({
                                inputRange: [-50, 0, 50, 100],
                                outputRange: [1, 0, 0, 1],
                            }),
                        }}
                    />
                </AnimatedImageBackground>

                {/* Tweets/profile */}
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
                    style={{
                        zIndex: 30,
                        marginTop: HEADER_HEIGHT_NARROWED,
                        paddingTop: HEADER_HEIGHT_EXPANDED,
                    }}>
                    <Surface style={[s.container]}>
                        <View
                            style={[
                                s.container,
                                {
                                    paddingHorizontal: 20,
                                },
                            ]}>
                            <Animated.Image
                                source={{
                                    uri: PROFILE_PICTURE_URI,
                                }}
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: 12,
                                    borderWidth: 4,
                                    borderColor: colors.background,
                                    marginTop: -30,
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

                        <View style={[s.container]}>
                            <View style={{height: 500}}>
                                <ProfileTabs />
                            </View>
                        </View>
                    </Surface>
                </Animated.ScrollView>
            </View>
        </MainContainer>
    );
};
