<template>
    <pendo-button
        v-pendo-tooltip="'Send message'"
        type="secondary"
        icon="send"
    />
</template>

<script>
import { PendoButton, PendoTooltip } from '@pendo/components';

export default {
    name: 'IconButton',
    directives: {
        PendoTooltip
    },
    components: {
        PendoButton
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

.contents {
    display: flex;
    align-items: center;
    gap: 4px;
}

.tag {
    border: 0;
    background-color: white !important;
    color: $color-teal-primary !important;
}
</style>
