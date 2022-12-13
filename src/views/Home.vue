<template>
    <main class="home-grid no-highlight">
        <homeDiv v-for="d in divs" :title="d.title" :imgSrc="d.imgSrc" @click="$router.push(`${d.path}`)"/>
    </main>
</template>

<script>
export default {
    data() {
        return {
            divs: [
                { imgSrc: 'books.svg', title: 'Теория', path: '/theory' },
                { imgSrc: 'basket.svg', title: 'Каталог', path: '/catalog' },
                { imgSrc: 'user.svg', title: 'Контакты', path: '/contacts' },
                { imgSrc: 'info.svg', title: 'О сайте', path: '/about' }
            ]
        }
    }
}
</script>

<style scoped>
.home-grid {
    display: grid;
    place-self: center;
    justify-content: center;
    align-content: center;
    place-items: center;
}

@media (max-width: 767px) {
    .home-grid {
        gap: 2rem;
    }
}

@media (min-width: 768px) {
    .home-grid {
        gap: 8vw;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .home-grid {
        gap: 5vw;
    }
}
</style>