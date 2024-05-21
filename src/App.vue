<template>
    <div id="app">
        <sidebar-nav class="nav" />
        <main>
            <router-view class="content" />
        </main>
        <footer>
            <p><em>Page Footer</em></p>
            <p>
                Documentation v{{ siteVersion }} &ensp; | &ensp;
                <a href="https://github.com/pendo-io/components" target="_blank"
                    >Component Library</a
                >
                v{{ libVersion }}
            </p>
        </footer>
    </div>
</template>

<script>
import SidebarNav from './components/SidebarNav.vue';

export default {
    name: 'App',
    components: {
        SidebarNav
    },
    data() {
        return {
            siteVersion: require('../package.json').version,
            libVersion: require('@pendo/components/package.json').version
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@pendo/components/lib/es/components.css';

#app {
    height: 100vh;
    display: grid;
    grid-template: auto 1fr auto / 300px 1fr;
    grid-template-areas: 'header header' 'nav main' 'footer footer';
    color: #2c3e50;
}

.nav {
    grid-area: nav;
}

main {
    grid-area: main;
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

footer {
    grid-area: footer;
    background-color: #2c3e50;
    color: white;
    padding: 10px;
}

footer a {
    color: white;

    &:focus {
        color: #b8e0ea;
    }
}
</style>
