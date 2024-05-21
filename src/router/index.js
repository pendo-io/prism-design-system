import Vue from 'vue';
import VueRouter from 'vue-router';
import autoRoutes from './register';

Vue.use(VueRouter);

const routes = [
    ...autoRoutes,
    {
        path: '/',
        component: () => import('@/views/HomePage.vue')
    }
];

export default new VueRouter({ routes });
