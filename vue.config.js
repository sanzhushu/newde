const { defineConfig } = require("@vue/cli-service");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map", // Source map generation must be turned on
    plugins: [
      sentryWebpackPlugin({
        org: "ZHOUSHUBIAO",
        project: "vue-sentry",

        // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
        authToken:
          "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",
      }),
    ],
  },
});
