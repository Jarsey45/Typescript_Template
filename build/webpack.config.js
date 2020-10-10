"use strict";
module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'build.js',
        path: `${process.cwd()}/build`,
    },
    watch: true
};
//# sourceMappingURL=webpack.config.js.map