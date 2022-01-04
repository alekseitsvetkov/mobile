module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-proposal-decorators", {legacy: true}],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            _app: "./src",
            _assets: "./assets",
          },
        },
      ],
      "react-native-reanimated/plugin",
      "inline-dotenv",
    ],
  };
};
