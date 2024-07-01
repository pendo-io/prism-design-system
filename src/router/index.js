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
        path: '/getting-started',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/design-principles',
        component: () => import('@/views/Principles.vue')
    },
    {
        path: '*',
        component: () => import('@/views/NotFoundPage.vue')
    }
];

export default new VueRouter({ routes });
