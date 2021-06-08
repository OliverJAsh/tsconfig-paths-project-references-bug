const TsconfigPathsPlugin =
  require("tsconfig-paths-webpack-plugin").TsconfigPathsPlugin;
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./app/main.ts"),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".ts"],
        configFile: path.join(__dirname, "./app/tsconfig.json"),
        logLevel: 'info'
      }),
    ],
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { projectReferences: true },
      },
    ],
  },
};
