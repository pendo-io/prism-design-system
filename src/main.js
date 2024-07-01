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
            delete this.$slots.default[0].data.attrs.parentName;
            this.$slots.default[0].data.class = 'mdx-blurb';

            return this.$slots.default;
        }
    }),
    // shallow-copy props because MDXProvider shares the parameter instance to parents
    img: ({ ...props }) => ({
        render() {
            // Pull everything except `attrs` into a child object, domProps
            const { attrs, ...domProps } = props;
            const data = { attrs, domProps };
            const elProps = { class: 'mdx-img', ...props, ...data };

            return <img {...elProps} />;
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
