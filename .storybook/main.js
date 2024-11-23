module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/nextjs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test?.toString().includes("scss")
    );
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};
