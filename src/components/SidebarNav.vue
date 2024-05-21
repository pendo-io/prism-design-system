<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Pendo Prism Design System" />
        <div class="search" />
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

<style lang="scss" scoped>
nav {
    background-color: #17044a;
    color: white;
    padding: 32px;
}
</style>
