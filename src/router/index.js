import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/pages/Index.mdx';
import MyMarkdown from '@/pages/components/MyMarkdown.mdx';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/button', component: MyMarkdown }
];

export default new VueRouter({ routes });
