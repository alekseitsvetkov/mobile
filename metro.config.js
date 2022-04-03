const {getDefaultConfig} = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

const {resolver} = config;

config.resolver = {
    ...resolver,
    sourceExts: [...resolver.sourceExts, 'cjs'],
};

config.transformer.minifierConfig.compress.drop_console = true;

module.exports = config;
