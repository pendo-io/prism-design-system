import Vue from 'vue';
import VueRouter from 'vue-router';
import autoRoutes from './register';

Vue.use(VueRouter);

const routes = [
    ...autoRoutes,
    {
        path: '/',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/components/buttons',
        component: () => import('@/content/components/buttons/index.mdx'),
        children: [
            {
                name: 'ButtonsSpecs',
                path: 'specs',
                meta: {
                    prop: 'specs',
                    label: 'Specs'
                },
                component: () => import('@/content/components/buttons/spec.mdx')
            },
            {
                name: 'ButtonsUsage',
                path: 'usage',
                meta: {
                    prop: 'usage',
                    label: 'Usage examples'
                },
                component: () =>
                    import('@/content/components/buttons/usageExamples.mdx')
            },
            {
                name: 'ButtonsProperties',
                path: 'properties',
                meta: {
                    prop: 'properties',
                    label: 'Properties'
                },
                component: () =>
                    import('@/content/components/buttons/properties.mdx')
            },
            {
                name: 'ButtonsGuidelines',
                path: 'guidelines',
                meta: {
                    prop: 'guidelines',
                    label: 'Copy guidelines'
                },
                component: () =>
                    import('@/content/components/buttons/copyGuidelines.mdx')
            }
        ]
    },
    {
        path: '*',
        component: () => import('@/views/NotFoundPage.vue')
    }
];

export default new VueRouter({ routes });
