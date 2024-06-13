<template>
    <nav>
        <div class="header">
            <router-link to="/">
                <img src="@/assets/logo.svg" alt="Pendo Prism Design System" />
            </router-link>
            <div class="search">
                <pendo-input placeholder="Search">
                    <template #prefix>
                        <pendo-icon type="search" size="14" />
                    </template>
                </pendo-input>
            </div>
            <hr />
        </div>
        <div class="main">
            <ul>
                <li>Release Notes</li>
                <li>About Prism</li>
                <li>
                    <router-link to="/getting-started">
                        Getting Started
                    </router-link>
                </li>
                <li>
                    <input type="checkbox" id="components" />
                    <label for="components" class="trigger">
                        <pendo-icon type="chevron-right" size="16" />
                        <span>Components</span>
                    </label>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <router-link to="/components/alerts">
                                    Alerts
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components/buttons">
                                    Buttons
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components/cards">
                                    Cards
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components/collapse">
                                    Collapse
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components/color-picker">
                                    Colour Picker
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components/date-picker">
                                    Date picker
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="tokens" />
                    <label for="tokens" class="trigger">
                        <pendo-icon type="chevron-right" size="16" />
                        <span>Tokens</span>
                    </label>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <router-link to="/tokens/colors">
                                    Colors
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="patterns" />
                    <label for="patterns" class="trigger">
                        <pendo-icon type="chevron-right" size="16" />
                        <span>Patterns</span>
                    </label>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <router-link to="/patterns/settings-page">
                                    Settings Page
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <input type="checkbox" id="designers" />
                    <label for="designers" class="trigger">
                        <pendo-icon type="chevron-right" size="16" />
                        <span>For Designers</span>
                    </label>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <router-link to="/designers/process">
                                    Design Process
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/designers/accessibility">
                                    Accessibility Guidelines
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/designers/content">
                                    Content Guidelines
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/designers/resources">
                                    Tools / Resources
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <p>Documentation v{{ siteVersion }}</p>
            <p>
                <a
                    href="https://github.com/pendo-io/components"
                    target="_blank">
                    Component Library
                </a>
                v{{ libVersion }}
            </p>
        </div>
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

input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    cursor: pointer;

    &:checked + .trigger .pendo-icon {
        transform: rotate(90deg);
    }

    &:checked ~ .dropdown {
        grid-template-rows: 1fr;
    }
}

li {
    margin: 22px 0;
    font-size: 16px;
    font-weight: 600;

    .dropdown {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;
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
