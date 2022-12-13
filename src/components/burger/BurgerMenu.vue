<template>
    <div class="burger">
        <h1 style="position: absolute; top: 1rem">Modern SSDs</h1>
        <burger-link 
            v-for="link in links"
            :title="link.title"
            :path="link.path"
            @click="($store.commit('setBurgerMenuVisible', false), $router.push(link.path)), $emit('unlockScroll')"
        />
    </div>
</template>

<script>

export default {
    name: 'burgerMenu',
    data() {
        return {
            links: [
                {
                    path: '/theory',
                    title: 'Теория'
                },
                {
                    path: '/catalog',
                    title: 'Каталог'
                },
                {
                    path: '/contacts',
                    title: 'Контакты'
                },
                {
                    path: '/about',
                    title: 'О сайте'
                }
            ]
        }
    }
}
</script>

<style scoped>

.burger {
    z-index: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    padding: 5rem 0;
    background-color: #FFF;
    transition: 200ms ease-in-out;
}

.active {
    left: 0;
}
</style>