module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['@babel/plugin-proposal-decorators', {legacy: true}],
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        _app: './src',
                        _assets: './assets',
                        _mocks: './__mocks__',
                        _constants: './src/constants',
                    },
                },
            ],
            'react-native-reanimated/plugin',
            'inline-dotenv',
        ],
        env: {
            production: {
                plugins: ['transform-remove-console'],
            },
        },
    };
};
