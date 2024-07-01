<template>
    <div class="home">
        <h1>Get Started with Prism</h1>
        <p>
            Welcome to Prism, Pendo's design system. This framework is our
            foundation, allowing us to design, collaborate, and build cleaner,
            faster, and better products.
        </p>
        <p>
            Search for a component or token in the left navigation to get
            started!
        </p>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
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
