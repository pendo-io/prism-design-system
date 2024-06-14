<template>
    <pendo-tabs
        v-if="tabs.length"
        v-model="currentTab"
        class="tabs"
        :tabs="tabs">
        <router-view />
    </pendo-tabs>
    <router-view v-else />
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
    name: 'ContentTabs',
    components: {
        PendoTabs
    },
    computed: {
        routes() {
            const parentIndex = Math.max(this.$route.matched.length - 2, 0);
            const parentPath = this.$route.matched[parentIndex].path;

            return recursiveChildSearch(
                this.$router.options.routes,
                parentPath
            );
        },
        tabs() {
            return this.routes.map(({ meta = {} }) => ({
                label: meta.label,
                prop: meta.prop
            }));
        },
        currentTab: {
            get() {
                return this.$route.meta?.prop;
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

<style lang="scss" scoped>
.tabs {
    margin-top: 36px;
}
</style>
