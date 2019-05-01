module.exports = {
    plugins: [
        require('postcss-partial-import'),
        require('postcss-preset-env')({
            stage: 0
        }),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-hexrgba'),
    ]
};