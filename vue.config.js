const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Prism Design System'
        }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mdx?$/,
                    use: ['babel-loader', '@mdx-js/vue-loader']
                }
            ]
        }
    }
});
