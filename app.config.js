import 'dotenv/config';

export default {
    expo: {
        name: 'Skeetry',
        slug: 'skeetry',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: false,
            bundleIdentifier: 'com.kive.skeetry',
            buildNumber: '3',
            infoPlist: {
                NSCameraUsageDescription: 'The app uses camera for making images and change the profile picture',
                NSPhotoLibraryUsageDescription: 'The app uses photo library for change the profile picture',
                NSLocationWhenInUseUsageDescription:
                    'Your location is needed to find a nearby city and easy using of the service',
            },
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#FFFFFF',
            },
            package: 'com.kive.skeetry',
            versionCode: 3,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        plugins: ['sentry-expo'],
        extra: {
            EXPO_CLIENT_ID: process.env.EXPO_CLIENT_ID,
            IOS_CLIENT_ID: process.env.IOS_CLIENT_ID,
            ANDROID_CLIENT_ID: process.env.ANDROID_CLIENT_ID,
            WEB_CLIENT_ID: process.env.WEB_CLIENT_ID,
            SENTRY_DSN: process.env.SENTRY_DSN,
        },
    },
};
