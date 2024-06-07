import Vue from 'vue';
import router from './router';
import { MDXProvider } from '@mdx-js/vue';
import App from './App.vue';
import './main.scss';

Vue.config.productionTip = false;

const components = {
    blockquote: (props) => ({
        render(h) {
            return h('strong', props);
        }
    })
};

new Vue({
    render: (h) => h(MDXProvider, { props: { components } }, [h(App)]),
    router
}).$mount('#app');
