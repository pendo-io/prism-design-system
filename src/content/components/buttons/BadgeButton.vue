<template>
    <pendo-button>
        <div class="contents">
            Switch to
            <pendo-tag class="tag" label="BETA" size="mini" />
        </div>
    </pendo-button>
</template>

<script>
import { PendoButton, PendoTag } from '@pendo/components';

export default {
    name: 'BadgeButton',
    components: {
        PendoButton,
        PendoTag
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
