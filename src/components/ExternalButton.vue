<template>
    <pendo-button type="custom" @click="openLink">
        <span class="content">
            <img :src="src" :alt="alt" />
            {{ text }}
        </span>
    </pendo-button>
</template>

<script>
import { PendoButton } from '@pendo/components';

export default {
    name: 'ExternalButton',
    components: {
        PendoButton
    },
    props: {
        type: {
            type: String,
            default: 'storybook',
            validator: (value) => ['storybook', 'figma'].includes(value)
        },
        href: {
            type: String,
            required: true
        }
    },
    computed: {
        src() {
            return require(`@/assets/${this.type}.png`);
        },
        alt() {
            return `${this.type} logo`;
        },
        text() {
            return this.type.charAt(0).toUpperCase() + this.type.slice(1);
        }
    },
    methods: {
        openLink() {
            window.open(this.href, '_blank');
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

.pendo-button:deep {
    font-weight: 400;
    color: black;
    background-color: $color-gray-30;
    padding: 10px;

    &:hover {
        color: black;
        background-color: $color-gray-40;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    img {
        height: 14px;
        width: 14px;
        object-fit: contain;
    }
}
</style>
