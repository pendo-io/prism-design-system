<template>
    <div class="home">
        <h1>Get Started with Prism</h1>
        <p>
            Welcome to Prism, Pendo's design system. This framework is our
            foundation, allowing us to design, collaborate, and build cleaner,
            faster, and better products.
        </p>
        <div class="search">
            <pendo-input
                placeholder="Search for a component or token"
                width="420px"
            >
                <template #prefix>
                    <pendo-icon type="search" size="14" />
                </template>
            </pendo-input>
        </div>
    </div>
</template>

<script>
import { PendoInput, PendoIcon } from '@pendo/components';

export default {
    name: 'HomePage',
    components: {
        PendoIcon,
        PendoInput
    }
};
</script>

<style lang="scss" scoped>
.home {
    max-width: 730px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

h1 {
    font-size: 3em;
    margin: 0;
}

p {
    margin: 0;
    line-height: 1.5;
}
</style>
