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
    padding: 120px 80px;
}
</style>
