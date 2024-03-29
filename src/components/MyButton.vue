<template>
    <pendo-button :label="`Count: ${count}`" @click="count++" />
</template>

<script>
import { PendoButton } from '@pendo/components';

export default {
    components: {
        PendoButton
    },
    data() {
        return {
            count: 0
        };
    }
};
</script>
