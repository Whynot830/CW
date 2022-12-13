<template>
    <light-button class="burger-link" v-show="($route.path != this.path)">
        {{title}}
    </light-button>
</template>

<script>
    export default {
        name: 'burgerLink',
        props: {
            path: String,
            title: String
        }
    }
</script>

<style scoped>
.burger-link {
    font-size: 1.3rem !important
}
</style>