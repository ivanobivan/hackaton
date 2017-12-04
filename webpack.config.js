const path = require('path');

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/app.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: "eslint-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader","postcss-loader"]
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    }
};