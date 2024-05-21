// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('@/content', true, /\.mdx$/);

const toVueRouterPath = (str) =>
    str
        .replace(/\.\w+$/, '')
        .replace('index', '')
        .replace('.', '')
        .replace(/\/$/, '');

const routes = [];

for (const fileName of requireComponent.keys().sort()) {
    const path = toVueRouterPath(fileName);
    const contentModule = requireComponent(fileName);
    const newRoute = {
        path,
        component: contentModule.default
    };

    const parentPath = path.replace(/\/[^/]+$/, '');
    const parentRoute = routes.find((route) => route.path === parentPath);

    if (contentModule.IS_TAB && parentRoute) {
        newRoute.path = path.replace(`${parentPath}/`, '');
        parentRoute.children = parentRoute.children || [];
        parentRoute.children.push(newRoute);
    } else {
        routes.push(newRoute);
    }
}

export default routes;
