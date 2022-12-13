<template>
    <div class="background-img" :style="{ backgroundImage: 'url(' + require(`@/assets/imgs/${imgSrc}`) + ')' }">
    </div>
</template>

<script>
export default {
    name: 'fixedBackground',
    props: {
        imgSrc: String
    }
}
</script>

<style scoped>
.background-img {
    z-index: -10;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.15;
    background-repeat: repeat;
}
</style>