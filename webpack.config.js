const HtmlWebpackPlagin = require('html-webpack-plugin');
const MinCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    MinCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html',
        }),
        new MinCSSExtractPlugin(),
    ]
}