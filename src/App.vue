<template>
    <vue-header :page-title="$route.meta.pageTitle" @unlockScroll="unlockScroll" @toggleScroll="toggleScroll" />
    <fixed-background :imgSrc="'circuit-board-bg.png'" />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <vue-footer />
</template>

<script>
import './assets/css/style.css'
export default {
    methods: {
        toggleScroll() {
            document.body.classList.toggle('noscroll')
        },
        unlockScroll() {
            if (document.body.classList.contains('noscroll')) {
                document.body.classList.remove('noscroll')
            }
        },
        onResize() {
            this.$store.commit('setMobile', document.documentElement.clientWidth < 768)
            if (this.$store.state.isMobile === false) {
                this.unlockScroll()
                this.$store.commit('setBurgerMenuVisible', false)
            }
        },
        scrolling() {
            if (window.scrollY > 1000) {
                if (this.$store.state.scrollUpButtonVisible !== true)
                    this.$store.commit('setScrollUpButtonVisible', true)
            }
            else {
                if (this.$store.state.scrollUpButtonVisible !== false)
                    this.$store.commit('setScrollUpButtonVisible', false)
            }
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
        window.addEventListener('scroll', this.scrolling)
    },
    beforeDestroy() {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', this.onResize)
    },
}
</script>

<style>
</style>