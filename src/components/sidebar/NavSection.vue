<template>
    <li>
        <template v-if="items.length">
            <div
                class="trigger"
                :class="{ expanded }"
                @click="$emit('click')">
                <pendo-icon
                    type="chevron-right"
                    size="16" />
                <span>{{ title }}</span>
            </div>
            <div
                class="dropdown"
                :class="{ expanded }">
                <ul>
                    <li
                        v-for="item in items"
                        :key="item.path">
                        <router-link
                            v-if="item.path"
                            :to="item.path">
                            {{ item.title }}
                        </router-link>
                        <template v-else>{{ item.title }}</template>
                    </li>
                </ul>
            </div>
        </template>
        <router-link
            v-else-if="path"
            :to="path">
            {{ title }}
        </router-link>
        <template v-else>
            {{ title }}
        </template>
    </li>
</template>

<script>
import { PendoIcon } from '@pendo/components';

export default {
    name: 'NavSection',
    components: {
        PendoIcon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        /**
         * Path to navigate to when the section is clicked.
         * Will not be rendered as a link if `items` is not empty, or if `path` is not provided.
         */
        path: {
            type: String,
            default: ''
        },
        /**
         * Elements with two fields: `title` and `path`.
         * If empty, the section will be rendered as a simple link (no dropdown).
         */
        items: {
            type: Array,
            default: () => []
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        id() {
            return this.title.toLowerCase().replace(/\s+/g, '-');
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 22px 0;
    font-size: 16px;
    font-weight: 600;

    .dropdown {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;

        &.expanded {
            grid-template-rows: 1fr;
        }
    }

    ul {
        overflow: hidden;
        padding-left: 24px;

        li {
            margin: 12px 0;
            font-size: 14px;
        }

        a {
            color: #c6c1db;
        }
    }
}

a {
    color: white;
    text-decoration: none;

    &.router-link-active {
        color: white;
        text-decoration: underline;
    }
}

.trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .pendo-icon {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    &.expanded .pendo-icon {
        transform: rotate(90deg);
    }
}
</style>
