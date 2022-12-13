<template>
    <header class="header no-highlight">
        <div class="flex-center" style="gap: 1rem">
            <img class="logo" src="@\assets\svgs\ssd_white.svg">
            <h2>Modern SSDs</h2>
        </div>
        <span v-if="this.pageTitle != ''" id="page-title">{{ pageTitle }}</span>
        <nav v-if="$route.path != '/'" class="flex-center">
            <img v-if="$route.path.includes('catalog/')" class="chevron"
                src="@/assets/svgs/chevron_left.svg" @click="$router.push('/catalog')">


            <img class="to-home-img" src="@/assets/svgs/home.svg" @click="$router.push('/')">

            <burger-button v-if="($store.state.isMobile && !$route.path.includes('catalog/'))" :class="{ 'burger-active': $store.state.burgerMenuVisible }"
                @click="(($store.commit('setBurgerMenuVisible', !$store.state.burgerMenuVisible)), $emit('toggleScroll'))" />

            <burger-menu @unlockScroll="$emit('unlockScroll')" v-if="$store.state.isMobile"
                :class="{ 'active': $store.state.burgerMenuVisible }" />

            <div v-else v-if="!$route.path.includes('catalog/')" class="nav-links">
                <h2 class="link" v-if="$route.path != '/theory'" @click="$router.push('/theory')">
                    Теория
                </h2>
                <h2 class="link" v-if="$route.path != '/catalog'" @click="$router.push('/catalog')">
                    Каталог
                </h2>
                <h2 class="link" v-if="$route.path != '/contacts'" @click="$router.push('/contacts')">
                    Контакты
                </h2>
                <h2 class="link" v-if="$route.path != '/about'" @click="$router.push('/about')">
                    О сайте
                </h2>

                <!-- <light-button v-if="$route.path != '/posts'" @click="$router.push('/posts')">
                    Посты
                </light-button> -->
            </div>
        </nav>
    </header>

</template>

<script>

export default {
    name: 'vueHeader',
    props: {
        pageTitle: String
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0px 4px 15px -13px #777;
    padding: 0 1rem;
}

.logo {
    width: 2.7rem;
    height: 2.7rem;
}

#page-title {
    display: none;
    position: absolute;
    font-size: 1.6rem;
    left: calc(50% - 3.7rem);
}

.to-home-img,
.chevron {
    cursor: pointer;
    filter: invert(0.3);
    transition: filter 150ms;
}

.to-home-img {
    width: 2.5rem;
    margin-right: 1rem;
    margin-bottom: 3px;
}

.chevron {
    width: 3.5rem;
}

.to-home-img:hover,
.chevron:hover {
    filter: invert(0.5);
}

.to-home-img:active,
.chevron:active {
    filter: invert(0.2);
}

.nav-links {
    display: flex;
    gap: 2rem;
    margin-left: 1rem;
}

@media (min-width: 425px) {
    .header {
        padding: 0 2rem;
    }
    .to-home-img {
        margin-right: 1.5rem;
    }
    .chevron {
        margin-right: 0.5rem;
    }
}

@media (min-width: 1024px) {
    .header {
        padding: 0 5rem;
    }
}

@media (min-width: 1440px) {
    .header {
        padding: 0 10rem;
    }

    #page-title {
        display: inline;
    }

    .nav-links {
        gap: 3rem;
        margin-left: 2rem;
    }

    .logo {
        margin-right: 1rem;
    }
}
</style>