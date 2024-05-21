<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Pendo Prism Design System" />
        <div class="search">
            <pendo-input placeholder="Search">
                <template #prefix>
                    <pendo-icon type="search" size="14" />
                </template>
            </pendo-input>
        </div>
        <hr />
        <ul>
            <li>Release Notes</li>
            <li>About Prism</li>
            <li><router-link to="/">Getting Started</router-link></li>
            <li>
                <span class="trigger">
                    <pendo-icon type="chevron-down" size="16" />
                    <span>Components</span>
                </span>
                <ul>
                    <li>
                        <router-link to="/components/button"
                            >Button</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/components/input">Input</router-link>
                    </li>
                    <li>
                        <router-link to="/components/icon">Icon</router-link>
                    </li>
                </ul>
            </li>
            <li>Tokens</li>
            <li>Patterns</li>
        </ul>
        <hr />
        <ul>
            <li>For Designers</li>
        </ul>
        <p>Documentation v{{ siteVersion }}</p>
        <p>
            <a href="https://github.com/pendo-io/components" target="_blank"
                >Component Library</a
            >
            v{{ libVersion }}
        </p>
    </nav>
</template>

<script>
import { PendoInput, PendoIcon } from '@pendo/components';

export default {
    name: 'SidebarNav',
    components: {
        PendoIcon,
        PendoInput
    },
    data() {
        return {
            siteVersion: require('@/../package.json').version,
            libVersion: require('@pendo/components/package.json').version
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

nav {
    background-color: #17044a;
    color: white;
    padding: 32px;
}

hr {
    border: 1px solid #6e6292;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 22px 0;
    font-size: 16px;
    font-weight: 600;

    ul {
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

    &.router-link-exact-active {
        color: white;
        text-decoration: underline;
    }
}

.trigger {
    display: flex;
    align-items: center;
    gap: 8px;

    .pendo-icon {
        display: inline-block;
    }
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
