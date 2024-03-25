const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
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
