<template>
    <div id="app">
        <sidebar-nav class="nav" />
        <div class="separator">
            <img src="@/assets/separator.svg" alt="separator" />
        </div>
        <main>
            <router-view class="content" />
        </main>
    </div>
</template>

<script>
import SidebarNav from './components/SidebarNav.vue';

export default {
    name: 'App',
    components: {
        SidebarNav
    }
};
</script>

<style lang="scss" scoped>
@import '@pendo/components/lib/es/components.css';
@import '@/styles/_colors.scss';

#app {
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 28px 1fr;
    grid-template-rows: minmax(0, 1fr);
    color: #2c3e50;
}

.separator {
    overflow: hidden;
    background-color: $color-pink-100;
}

main {
    background-color: #ecf0f1;
    padding: 10px;
}

@media (min-width: 66rem) {
    .content {
        padding-left: calc(10% + 1.5rem);
        padding-right: 2rem;
    }
}

@media (min-width: 99rem) {
    .content {
        max-width: 70rem;
        padding-left: 200px;
    }
}
</style>
