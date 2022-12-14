const path = require("path");

const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildPath = "dist";

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "k.js",
        path: path.resolve(__dirname, buildPath),
        libraryTarget: "umd",
        globalObject: "this"
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src/k.d.ts"),
                    to: path.join(__dirname, buildPath, "k.d.ts")
                },
                {
                    from: path.join(__dirname, "package-dist.json"),
                    to: path.join(__dirname, buildPath, "package.json")
                }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
            extractComments: false
        })]
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        port: 3000,
        static: {
            directory: path.join(__dirname, "dev")
        }
    }
};
