<template>
    <nav>
        <div class="header">
            <router-link to="/">
                <img
                    src="@/assets/logo.svg"
                    alt="Pendo Prism Design System" />
            </router-link>
            <div class="search">
                <pendo-input
                    v-model="search"
                    placeholder="Search">
                    <template #prefix>
                        <pendo-icon
                            type="search"
                            size="14" />
                    </template>
                </pendo-input>
            </div>
            <hr />
        </div>
        <div class="main">
            <ul>
                <template v-for="(item, index) in filteredItems">
                    <nav-section
                        v-if="item.title"
                        v-bind="item"
                        :key="item.title"
                        :expanded="expandState[index]"
                        @click="
                            $set(expandState, index, !expandState[index])
                        " />
                    <hr
                        v-else
                        :key="index" />
                </template>
            </ul>
        </div>
        <div class="footer">
            <p>Documentation v{{ siteVersion }}</p>
            <p>
                <a
                    href="https://github.com/pendo-io/components"
                    target="_blank">
                    Component Library</a
                >
                v{{ libVersion }}
            </p>
        </div>
    </nav>
</template>

<script>
import { PendoInput, PendoIcon } from '@pendo/components';
import NavSection from './sidebar/NavSection.vue';

const NAV_ITEMS = [
    { title: 'Release Notes' },
    { title: 'About Prism' },
    { title: 'Getting Started', path: '/getting-started' },
    {
        title: 'Components',
        items: [
            { title: 'Alerts', path: '/components/alerts' },
            { title: 'Buttons', path: '/components/buttons' },
            { title: 'Cards', path: '/components/cards' },
            { title: 'Collapse', path: '/components/collapse' },
            { title: 'Colour Picker', path: '/components/color-picker' },
            { title: 'Date picker', path: '/components/date-picker' }
        ]
    },
    {
        title: 'Tokens',
        items: [{ title: 'Colors', path: '/tokens/colors' }]
    },
    {
        title: 'Patterns',
        items: [{ title: 'Settings Page', path: '/patterns/settings-page' }]
    },
    {},
    {
        title: 'For Designers',
        items: [
            { title: 'Design Process', path: '/designers/process' },
            {
                title: 'Accessibility Guidelines',
                path: '/designers/accessibility'
            },
            { title: 'Content Guidelines', path: '/designers/content' },
            { title: 'Tools / Resources', path: '/designers/resources' }
        ]
    }
];

export default {
    name: 'SidebarNav',
    components: {
        NavSection,
        PendoIcon,
        PendoInput
    },
    data() {
        return {
            siteVersion: require('@/../package.json').version,
            libVersion: require('@pendo/components/package.json').version,
            search: '',
            expandState: Array.from({ length: NAV_ITEMS.length }, () => false),
            expandStateCache: []
        };
    },
    watch: {
        hasSearch(value) {
            if (value) {
                this.expandStateCache = Array.from(this.expandState);
                this.expandState.fill(true);
            } else {
                this.expandState = this.expandStateCache;
            }
        }
    },
    computed: {
        hasSearch() {
            return !!this.search.trim();
        },
        filteredItems() {
            const search = this.search.trim().toLowerCase();
            if (!search) {
                return NAV_ITEMS;
            }

            const filteredSubItems = NAV_ITEMS.map((element) => {
                if (element.items) {
                    return {
                        ...element,
                        items: element.items.filter((item) =>
                            item.title.toLowerCase().includes(search)
                        )
                    };
                }

                return element;
            });

            const filteredItems = [];
            let hrFlag = true;

            for (const item of filteredSubItems) {
                if (item.items?.length) {
                    filteredItems.push(item);
                    hrFlag = false;
                } else if (item.title) {
                    if (item.title.toLowerCase().includes(search)) {
                        filteredItems.push(item);
                        hrFlag = false;
                    }
                } else if (!hrFlag) {
                    filteredItems.push(item);
                    hrFlag = true;
                }
            }

            if (filteredItems.length && hrFlag) {
                filteredItems.pop();
            }

            return filteredItems;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

nav {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: #17044a;
    color: white;
}

.header {
    padding: 32px 32px 0;
}

.main {
    padding: 0 32px;
    overflow-y: auto;
}

.footer {
    padding: 32px;
    border-top: 1px solid #9a91b6;
    font-size: 14px;

    p {
        margin: 0;
    }

    a {
        color: white;
        text-decoration: underline;
    }
}

hr {
    border: 1px solid #6e6292;
}

ul {
    list-style-type: none;
    padding: 0;
}

.search {
    margin: 18px 0;
}

:deep(.pendo-input__field) {
    background-color: #432277;
    border-color: #4b3478;
    color: $color-gray-60;
}
</style>
