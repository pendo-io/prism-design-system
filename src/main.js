import Vue from 'vue';
import router from './router';
import { MDXProvider } from '@mdx-js/vue';
import App from './App.vue';
import './main.scss';

Vue.config.productionTip = false;

/**
 * Use this object *only* to map standard Markdown elements to custom Vue components.
 *
 * Doing so allows writers to, for example, use the blockquote `>` syntax to render
 * a different HTML tag that is more semantically relevant.
 *
 * In all other cases, prefer explicit component imports into the MDX file.
 */
const components = {
    blockquote: () => ({
        render() {
            // <p parentname="blockquote">...</p>
            return this.$slots.default;
        }
    })
};

new Vue({
    render() {
        return (
            <MDXProvider components={components}>
                <App />
            </MDXProvider>
        );
    },
    router
}).$mount('#app');
