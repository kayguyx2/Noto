module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@assets': './src/assets',
                    '@styles': './src/styles',
                    '@components': './src/components',
                },
            },
        ],
    ],
};
