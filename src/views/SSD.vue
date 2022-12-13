<template>
    <main class="content-wrapper">
        <div class="flex-center">
            <div class="card white-round">
                <div class="flex-center wrapper">
                    <div class="img-wrapper">
                        <img :src="require(`@/assets/imgs/catalog/${imgSrc}`)" :alt="'no img'">
                    </div>
                    <span class="title">{{ title }}</span>
                </div>


                <div class="info">
                    <span style="font-size: 1.1rem">Основные характеристики</span>
                    <ul class="specs">
                        <li>Форм-фактор: {{ formFactor }}</li>
                        <li>Емкость: {{ capacity }}</li>
                        <li>Скорость чтения/записи: {{ speed }}</li>
                        <li>Тип флеш-памяти: {{ memoryType }}</li>
                        <li>Интерфейсы: {{ interfaces }}</li>
                        <li>Разъем: {{ connector }}</li>
                    </ul>
                    <span class="link" id="goto" @click="(dialogVisible = true)">Открыть на Я.Маркет</span>
                </div>

                <dialog-window v-model:show="dialogVisible">
                    Подтверждение перехода по внешней ссылке: {{ link }}
                    <div class="flex-center" style="margin-top: 1rem">
                        <light-button @click="redirect" class="btn">Да</light-button>
                        <light-button @click="(dialogVisible = false)" class="btn">Нет</light-button>
                    </div>
                </dialog-window>
            </div>
        </div>

    </main>

</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
        }
    },
    props:
        [
            'imgSrc', 'title', 'formFactor',
            'speed', 'memoryType', 'capacity',
            'interfaces', 'connector', 'link'
        ],
    methods: {
        redirect() {
            window.location.href = this.link
        },
    },
    mounted() {
        this.$el.querySelector('[id="goto"]').addEventListener('click', this.linkHandler)
    },
    beforeUnmount() {
        this.$el.querySelector('[id="goto"]').removeEventListener('click', this.linkHandler)
    }
}
</script>

<style scoped>
.flex-center {
    min-height: 80%;
}
.card {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    justify-content: center;
}

.wrapper {
    flex-direction: column;
    gap: 1rem;
    height: 40%;
}

.img-wrapper {
    display: flex;
    width: 100%;
    height: 40%;
    min-width: 5rem;
    min-height: 10rem;
    position: relative;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.title {
    font-size: 1.2rem;
    text-align: center;
}

.info {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
}

.specs {
    list-style: none;
}

span.link {
    width: fit-content;
    margin-top: 1rem;
    font-size: 1.2rem;
}

.btn {
    width: 5.5rem !important;
}

@media (max-width: 424px) {
    .card {
        width: 90%;
        flex-direction: column;
    }
}

@media (min-width: 425px) {
    .card {
        flex-direction: column;
        width: fit-content;
    }
}

@media (min-width: 768px) {
    .card {
        flex-direction: row;
        max-width: 90%;
    }
}
</style>