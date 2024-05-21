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
            <li>Components</li>
            <li>Tokens</li>
            <li>Patterns</li>
        </ul>
        <hr />
        <ul>
            <li>For Designers</li>
        </ul>
    </nav>
</template>

<script>
import { PendoInput, PendoIcon } from '@pendo/components';

export default {
    name: 'SidebarNav',
    components: {
        PendoIcon,
        PendoInput
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
    font-weight: 600;
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
