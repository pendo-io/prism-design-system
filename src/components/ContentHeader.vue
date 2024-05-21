<template>
    <pendo-tabs :value="currentTab" :tabs="tabs">
        <router-view />
    </pendo-tabs>
</template>

<script>
import { PendoTabs } from '@pendo/components';

export default {
    name: 'ContentHeader',
    components: {
        PendoTabs
    },
    props: {
        parentPath: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            tabs: [
                { label: 'Specs', prop: 'specs' },
                { label: 'Usage examples', prop: 'examples' },
                { label: 'Properties', prop: 'props' },
                { label: 'Copy guidelines', prop: 'guidelines' }
            ]
        };
    },
    computed: {
        currentTab() {
            return this.$route.params.tab || 'specs';
        }
    }
};
</script>
