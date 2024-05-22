<template>
    <pendo-tabs v-model="currentTab" :tabs="tabs">
        <router-view />
    </pendo-tabs>
</template>

<script>
import { PendoTabs } from '@pendo/components';

function recursiveChildSearch(routes, path) {
    for (const route of routes) {
        if (route.path === path) {
            return route.children || [];
        } else if (route.children?.length) {
            return recursiveChildSearch(route.children, path);
        }
    }

    return [];
}

export default {
    name: 'ContentHeader',
    components: {
        PendoTabs
    },
    computed: {
        routes() {
            if (this.$route.matched.length < 2) return [];

            const parentPath =
                this.$route.matched[this.$route.matched.length - 2].path;

            return recursiveChildSearch(
                this.$router.options.routes,
                parentPath
            );
        },
        tabs() {
            return this.routes.map(({ meta }) => ({
                label: meta.label,
                prop: meta.prop
            }));
        },
        currentTab: {
            get() {
                return this.$route.meta.prop;
            },
            set(prop) {
                const newRoute = this.routes.find(
                    ({ meta }) => meta.prop === prop
                );
                this.$router.push(newRoute);
            }
        }
    }
};
</script>
