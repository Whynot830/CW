<template>
    <main class="content-wrapper">
        <div class="page-title">Каталог</div> <!--${ssd.imgSrc}-->
        <div class="utils flex-center white-round">
            <light-input v-model="searchQuery" placeholder="Поиск накопителя по названию" />
            <div class="flex-center" style="gap: 0.7rem">
                <checkbox v-model="isSorted" />
                Сортировать в алфавитном порядке
            </div>
        </div>
        <div class="catalog">
            <transition-group name="card-list" v-if="sortedAndSearchedCards.length">
                <card class="card no-highlight" @mouseenter="focus" @mouseleave="reset"
                    v-for="ssd in sortedAndSearchedCards" :imgSrc="`catalog/${ssd.imgSrc}`" :title="ssd.title"
                    :key="ssd.id" @click="$router.push({
                        name: 'ssd',
                        params: {
                            id: ssd.id
                        },
                        query: {
                            imgSrc: ssd.imgSrc,
                            title: ssd.title,
                            formFactor: ssd.formFactor,
                            speed: ssd.speed,
                            memoryType: ssd.memoryType,
                            capacity: ssd.capacity,
                            interfaces: ssd.interfaces,
                            connector: ssd.connector,
                            link: ssd.link,
                        }
                    })" />
            </transition-group>
            <span v-else style="font-size: 1.2rem; grid-column: span 4">Накопителей не найдено</span>
        </div>
        <scroll-up-button />
    </main>
</template>

<script>
import TransitionGroup from 'vue';
export default {
    data() {
        return {
            isSorted: false,
            searchQuery: '',
            ssds: [
                {
                    id: 1, imgSrc: 'kingston-a400.webp', title: 'Kingston A400 SATA SA400S37/480G', formFactor: '2,5"', speed: '500 МБ/с / 450 МБ/с', capacity: '480 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC',
                    link: 'https://goo.su/HdzrUH'
                },
                {
                    id: 2, imgSrc: 'samsung-980-250gb.webp', title: 'Samsung 980 M.2 MZ-V8V250BW', formFactor: '2280, M', speed: '2900 МБ/с / 1300 МБ/с', capacity: '250 ГБ', interfaces: 'PCI-E', connector: 'M.2', memoryType: 'V-NAND 3-bit MLC',
                    link: 'https://goo.su/ovmrt'
                },
                {
                    id: 3, imgSrc: 'wd-blue.webp', title: 'WD Blue SN570 M.2 WDS100T3B0C', formFactor: '2280, M', speed: '3500 МБ/с / 3000 МБ/с', capacity: '1 ТБ', interfaces: 'PCI-E', connector: 'M.2', memoryType: 'TLC',
                    link: 'https://goo.su/KpUL0ck'
                },
                {
                    id: 4, imgSrc: 'amd-radeon.webp', title: 'AMD Radeon SATA R5SL128G', formFactor: '2,5"', speed: '530 МБ/с / 445 МБ/с', capacity: '128 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/d7jo'
                },
                {
                    id: 5, imgSrc: 'netac-sa500.webp', title: 'Netac SA500 SATA NT01SA500-1T0-S3X', formFactor: '2,5"', speed: '530 МБ/с / 475 МБ/с', capacity: '1 ТБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/S1qR'
                },
                {
                    id: 6, imgSrc: 'gigabyte-256gb.webp', title: 'GIGABYTE SATA (GP-GSTFS31256GTND)', formFactor: '2,5"', speed: '520 МБ/с / 500 МБ/с', capacity: '256 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/S4zliRX'
                },
                {
                    id: 7, imgSrc: 'patriot-p210.webp', title: 'Patriot Memory SATA P210S512G25', formFactor: '2,5"', speed: '520 МБ/с / 430 МБ/с', capacity: '512 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/IISv'
                },
                {
                    id: 8, imgSrc: 'xpg-sx6000.webp', title: 'XPG SX6000 Lite M.2 SX6000', formFactor: '2280', speed: '1800 МБ/с / 1200 МБ/с', capacity: '512 ГБ', interfaces: 'PCI-E', connector: 'M.2', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/5rRQQd'
                },
                {
                    id: 9, imgSrc: 'samsung-870-qvo.webp', title: 'Samsung 870 QVO SATA MZ-77Q1T0BW', formFactor: '2,5"', speed: '560 МБ/с / 530 МБ/с', capacity: '1 ТБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'V-NAND 4-bit MLC',
                    link: 'https://goo.su/LdNjEoL'
                },
                {
                    id: 10, imgSrc: 'hikvision-120gb.webp', title: 'Hikvision SATA HS-SSD-C100/120G', formFactor: '2,5"', speed: '550 МБ/с / 435 МБ/с', capacity: '120 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/I48wm'
                },
                {
                    id: 11, imgSrc: 'netac-nv3000.webp', title: 'Netac NV3000 M.2 NT01NV3000-500-E4X', formFactor: '2280, M', speed: '3100 МБ/с / 2100 МБ/с', capacity: '500 ГБ', interfaces: 'PCI-E', connector: 'M.2', memoryType: 'QLC 3D NAND',
                    link: 'https://goo.su/cRem'
                },
                {
                    id: 12, imgSrc: 'hp-s700.webp', title: 'HP S700 SATA 6MC15AA#ABB', formFactor: '2,5"', speed: '570 МБ/с / 525 МБ/с', capacity: '1 ТБ', interfaces: 'SATA 3Gb/s, SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/fEbq'
                },
                {
                    id: 13, imgSrc: 'adata-su650.webp', title: 'ADATA Ultimate SU650 SATA ASU650SS-240GT-R', formFactor: '2,5"', speed: '520 МБ/с / 450 МБ/с', capacity: '240 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/VQ4CVu'
                },
                {
                    id: 14, imgSrc: 'apacer-panther.webp', title: 'Apacer PANTHER 512 ГБ SATA AP512GAS350-1', formFactor: '2,5"', speed: '560 МБ/с / 540 МБ/с', capacity: '512 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/XcmAx'
                },
                {
                    id: 15, imgSrc: 'crucial-bx-240gb.webp', title: 'Crucial BX SATA CT240BX500SSD1', formFactor: '2,5"', speed: '540 МБ/с / 500 МБ/с', capacity: '240 ГБ', interfaces: 'SATA 6Gb/s', connector: 'SATA', memoryType: 'TLC 3D NAND',
                    link: 'https://goo.su/OLKz537'
                },
                {
                    id: 16, imgSrc: 'kingspec-m2-256gb.webp', title: 'KingSpec M.2 NT-256', formFactor: '2280', speed: '560 МБ/с / 520 МБ/с', capacity: '240 ГБ', interfaces: 'SATA 6Gb/s', connector: 'M.2', memoryType: 'MLC 3D NAND',
                    link: 'https://goo.su/gcwc'
                }
            ]
        }
    },
    methods: {
        focus(event) {
            if (event.target) {
                let cards = [].slice.call(event.target.parentNode.children)
                cards.forEach(card => (card != event.target) ? card.classList.add('blurred') : card.classList.add('hover'))
            }
        },
        reset() {
            this.$el.querySelectorAll('.card').forEach(card => {
                card.classList.remove('blurred')
                card.classList.remove('hover')
            })
        }
    },
    computed: {
        sortedCards() {
            return (this.isSorted) ? [...this.ssds].sort((ssd1, ssd2) =>
                ssd1.title.localeCompare(ssd2.title)) : [...this.ssds]
        },
        sortedAndSearchedCards() {
            return this.sortedCards.filter(ssd =>
                ssd.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    }
}
</script>

<style scoped>
.utils {
    margin: 0 auto;
    gap: 1rem;
}

.catalog {
    display: grid;
    justify-content: center;
    justify-items: center;
}

.card-list-item {
    position: absolute;
    display: inline-block;
    margin-right: 10px;
}

.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.card {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.blurred {
    filter: blur(0.8px)
}

.hover {
    transform: scale(1.03)
}

@media (max-width: 767px) {
    .utils {
        width: 70vw;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .catalog {
        gap: 1rem;
        grid-template-columns: 90%;
    }

    .card {
        width: 70vw;
    }
}

@media (min-width: 768px) {
    .utils {
        width: 92%;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .catalog {
        gap: 1rem;
        grid-template-columns: repeat(2, 45%);
    }
}

@media (min-width: 1024px) {
    .utils {
        flex-direction: row;
        gap: 3rem;
        margin-bottom: 2rem;
    }

    .catalog {
        gap: 2rem;
        grid-template-columns: repeat(3, 28%);
    }
}

@media (min-width: 1440px) {
    .utils {
        gap: 5rem;
    }

    .catalog {
        grid-template-columns: repeat(4, 20%);
    }
}
</style>