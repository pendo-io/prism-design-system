<template>
    <div id="app">
        <sidebar-nav class="nav" />
        <div class="separator">
            <img src="@/assets/separator.svg" alt="separator" />
        </div>
        <main>
            <router-view class="content" />
            <div class="boop">
                <img src="@/assets/star-1.svg" alt="star" />
                <img src="@/assets/star-2.svg" alt="star" />
                <img src="@/assets/star-3.svg" alt="star" />
                <img src="@/assets/star-3.svg" alt="star" />
            </div>
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
    overflow: scroll;
    perspective: 1px;
}

[mdxtype='MDXLayout'] {
    max-width: 730px;
}

.boop {
    position: absolute;
    top: -49vh;
    right: -37vw;
    transform: translateZ(-1px) scale(2);

    img {
        filter: blur(6px);
    }

    img:nth-child(1) {
        position: absolute;
        top: -27px;
        right: -35px;
    }

    img:nth-child(2) {
        position: absolute;
        top: 40px;
        right: 105px;
    }

    img:nth-child(3) {
        position: absolute;
        top: 122px;
        right: 69px;
    }

    img:nth-child(4) {
        position: absolute;
        top: 156px;
        right: 126px;
    }
}
</style>
