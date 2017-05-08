//webpack efficiency analyzer
var analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var webpack = require('webpack');
module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /lib/],
                loaders: ['babel-loader']
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new analyzer()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
        path: __dirname + '/www',
        publicPath: __dirname + '/www/',
        filename: 'bundle.js'
    }
};
