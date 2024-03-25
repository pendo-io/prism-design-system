<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <pendo-button label="Click me" />
        <my-markdown />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyMarkdown from './components/MyMarkdown.mdx';
import { PendoButton } from '@pendo/components';

export default {
    name: 'App',
    components: {
        HelloWorld,
        MyMarkdown,
        PendoButton
    }
};
</script>

<style>
@import '@pendo/components/lib/es/components.css';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
