import Vue from 'vue';
import VueRouter from 'vue-router';
import MyMarkdown from '../components/MyMarkdown.mdx';

Vue.use(VueRouter);

const routes = [{ path: '/', component: MyMarkdown }];

export default new VueRouter({ routes });
