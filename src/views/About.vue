<template>
    <main class="content-wrapper">
        <fixed-background :imgSrc="'circuit-board-bg.png'" />
        <div class="page-title">О сайте</div>
        <div class="flex-center">
            <div class="white-round">
                <p>Интернет-ресурс <span class="bold">Modern SSDs</span> позволяет познакомиться с понятиями и терминами
                    из
                    сферы твердотельных накопителей, узнать историю их становления и развития.
                    Интерактивный каталог поможет узнать основные характеристики популярных, а также более подробную
                    информацию (цену, отзывы, рейтинг, наличие и популярность) благодаря ссылке на внешние источники. Ресурс был создан с использованием языков
                    веб-программирования HTML5, CSS3, JavaScript, редактора кода Visual Studio Code, а также фреймворка
                    Vue.js, выполнен в стиле Material Design с уклоном на плиточную модель контента.</p>
            </div>
        </div>
    </main>

</template>

<script>
export default {

}
</script>

<style scoped>
p {
    font-size: 1.1rem;
}
.flex-center {
    min-height: 70%;
}

.white-round {
    padding: 2rem;
    max-width: 50rem;
}
</style>