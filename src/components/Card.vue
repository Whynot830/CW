<template>
    <div class="card white-round">
        <div class="img-wrapper">
            <img :src="require(`@/assets/imgs/${imgSrc}`)" :alt="'no img'">
        </div>
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        imgSrc: String,
        title: String,
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-flow: column;
    padding: 1rem !important;
    max-width: 40rem;
}

.img-wrapper {
    width: 100%;
    height: 15rem;
    margin-bottom: 1rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

span {
    font-size: 1.1rem;
    text-align: center;
}
</style>