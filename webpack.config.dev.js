

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
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader']
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
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
        path: __dirname + '/www',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: './www',
        historyApiFallback: true
    }
};
