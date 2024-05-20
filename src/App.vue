<template>
    <div id="app">
        <header><strong>Page Header</strong></header>
        <nav>
            Sidebar Navigation
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                    <router-link to="/components/button">Button</router-link>
                </li>
                <li>Guidelines</li>
                <li>Components</li>
                <li>Patterns</li>
            </ul>
        </nav>
        <main>
            <router-view class="content" />
        </main>
        <footer><em>Page Footer</em></footer>
    </div>
</template>

<script>
export default { name: 'App' };
</script>

<style scoped>
@import '@pendo/components/lib/es/components.css';

#app {
    height: 100vh;
    display: grid;
    grid-template: auto 1fr auto / auto 1fr;
    grid-template-areas: 'header header' 'nav main' 'footer footer';
    color: #2c3e50;
}

header {
    grid-area: header;
    background-color: #2c3e50;
    color: white;
    padding: 10px;
}

nav {
    grid-area: nav;
    background-color: #44596e;
    color: white;
    padding: 10px;
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
</style>
