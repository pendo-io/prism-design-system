// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('@/content', true, /\.mdx$/);

const toVueRouterPath = (str) =>
    str
        .replace(/\.\w+$/, '') // Remove file extension
        .replace('index', '') // Remove index (filename)
        .replace('.', '') // Remove other extraneous periods
        .replace(/\/$/, ''); // Remove trailing slash

// #############################################################################

const metaTree = {};

for (const fileName of requireComponent.keys().sort()) {
    const path = toVueRouterPath(fileName);
    const component = requireComponent(fileName);

    const pathKeys = path.split('/');
    pathKeys.shift(); // the first item is always empty due to leading slash
    let current = metaTree;
    for (const key of pathKeys) {
        if (!current.subRoutes) {
            current.subRoutes = {};
        }
        if (!current.subRoutes[key]) {
            current.subRoutes[key] = {};
        }
        current = current.subRoutes[key];
    }

    current.component = component;
}

// #############################################################################

let count = 0;

function createRoute(key, value) {
    let routes = [];

    if (value.subRoutes) {
        routes = Object.entries(value.subRoutes).flatMap(([key, value]) =>
            createRoute(key, value)
        );
    }

    const siblings = [];
    const children = [];

    for (const route of routes) {
        if (route.meta?.tab) {
            route.meta.prop = route.path;
            children.push(route);
        } else {
            route.path = `${key}/${route.path}`;
            siblings.push(route);
        }
    }

    children.sort((a, b) => a.meta.index - b.meta.index);

    if (value.component) {
        const selfRoute = {
            name: `${count++}`,
            path: key || '/',
            component: value.component.default,
            meta: value.component.META
        };
        if (children.length) {
            selfRoute.children = children;
        }
        siblings.unshift(selfRoute);
    }

    return siblings;
}

// #############################################################################

const routes = createRoute('', metaTree);

export default routes;
