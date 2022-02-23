import 'dotenv/config';

export default {
    expo: {
        name: 'skeetry',
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
            supportsTablet: true,
            bundleIdentifier: 'com.kive.skeetry',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#FFFFFF',
            },
            package: 'com.kive.skeetry',
            versionCode: 1,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        plugins: ['sentry-expo'],
        hooks: {
            postPublish: [
                {
                    file: 'sentry-expo/upload-sourcemaps',
                    config: {
                        organization: "your sentry organization's short name here",
                        project: "your sentry project's name here",
                        authToken: 'your auth token here',
                    },
                },
            ],
        },
        extra: {
            expoClientId: process.env.expoClientId,
            iosClientId: process.env.iosClientId,
            androidClientId: process.env.androidClientId,
            webClientId: process.env.webClientId,
        },
    },
};
