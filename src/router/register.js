// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('@/content', true, /\.mdx$/);

export default requireComponent.keys().map((fileName) => {
    const path = fileName.replace(/\.\w+$/, '');

    // Underscore to colon is for vue router path params.
    // Currently unused because we're only pulling MDX files,
    // but could be useful in the future.
    const toVueRouterPath = (str) =>
        str.replace('_', ':').replace('index', '').replace('.', '');

    return {
        path: toVueRouterPath(path),
        component: requireComponent(fileName).default
    };
});
