<template>
        <div class="home-div no-highlight">
            <img class="home-img" :src="require(`@/assets/svgs/${imgSrc}`)" :alt="'no img'">
            <p class="title">{{title}}</p>
        </div>
</template>

<script>
export default {
    name: 'homeDiv',
    props: {
        imgSrc: String,
        title: String,
        path: String,
    },
}
</script>

<style scoped>
.home-div {
    padding: 1rem;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 1.5rem;
    box-shadow: 0 0 1.5rem -10px gray;
    background-color: white;
    aspect-ratio: 1/1;
    transition: 150ms;
}

.home-div::before {
    position: absolute;
    left: 50%;
    border-radius: 1.5rem;
    content: '';
    width: 0;
    height: 0;
    background-color: #333;
    transition: 150ms;
}

.home-div:hover::before {
    width: 100%;
    height: 100%;
    left: 0;
}

.home-img {
    margin: 0 auto;
    width: 55%;
    filter: invert(0.15);
    transition: 200ms;
}

.title {
    z-index: 1;
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    color: #222;
    transition: 200ms;
}

.home-div:hover .title {
    color: #DDD;
}

.home-div:hover .home-img {
    filter: invert(0.9);
}

@media (max-width: 767px) {
    .home-div {
        width: 10rem;
    }
}
@media (min-width: 768px) {
    .home-div {
        width: 12rem;
    }
}

@media (min-width: 2560px) {
    .home-div {
        width: 15rem;
    }
}
</style>