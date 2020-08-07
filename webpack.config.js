const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: "awesome-typescript-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
    },
    ],
  },
  devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
        
    ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 4001,
  },
};
