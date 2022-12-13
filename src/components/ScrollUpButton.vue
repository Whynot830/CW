<template>
    <div @click="scrollUp" class="btn flex-center no-highlight" :class="{'visible': $store.state.scrollUpButtonVisible}">
        <img class="img" src="@/assets/svgs/chevron-up.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'scrollUpButton',
        methods: {
            scrollUp() {
                scrollTo(0,0)
            }
        }
    }
</script>

<style scoped>
.btn {
    pointer-events: none;
    cursor: pointer;
    position: sticky;
    float: right;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0;
    box-shadow: 0 0 15px -10px black;
    bottom: 2rem;
    margin-top: 2rem;
    transition: 300ms;
}

.btn.visible {
    pointer-events: all;
    opacity: 1;
}
.img {
    filter: invert(0.3);
    width: 3rem;
}
.btn:active {
    background-color: #EEE;
}


</style>