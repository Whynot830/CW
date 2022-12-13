<template>
    <main class="content-wrapper">
        <fixed-background :imgSrc="'circuit-board-bg.png'" />
        <div class="page-title">Контакты</div>
        <div class="contacts">
            <div class="team white-round flex-center">
                <div class="me flex-center">
                    <img src="@/assets/imgs/pfp.jpg" class="pfp" alt="">
                    <span>whynot</span>
                </div>
                <ul>
                    <li>CEO</li>
                    <li>Project Manager</li>
                    <li>UI/UX Designer</li>
                    <li>Web Developer</li>
                    <li>Web Tester</li>
                </ul>
            </div>
            <div class="address white-round flex-center">
                <p>
                    Адрес
                    <br>
                    119454, Россия, Москва
                    <br>
                    Проспект Вернадского 78
                    <br>
                    Метро Юго-Западная
                    <br>
                </p>
            </div>
            <div class="white-round" style="padding: 0" id="map">
            </div>
            <form class="form white-round">
                <span>Обратная связь</span>
                <light-input id="name" class="text-input" type="text" placeholder="Имя" />
                <light-input id="email" type="email" placeholder="Почта" />
                <rating :label="'Рейтинг ресурса'" id="rating"></rating>
                <light-input id="wish" type="textarea" :textArea="true" placeholder="Ваши пожелания" />
                <light-button id="submit" type="reset" @click="(dialogVisible = true)" style="margin: 0">Отправить</light-button>
            </form>
        </div>
        <dialog-window v-model:show="dialogVisible">
            <div class="flex-center" style="flex-direction: column; gap: 1rem">
               <h3>Спасибо за ваш отзыв!</h3>
            <light-button style="margin: 0" @click="(dialogVisible = false)">Закрыть</light-button>
            </div>
           
        </dialog-window>
    </main>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
        }
    },
    mounted() {
        ymaps.ready(this.mapInit)
    },
    methods: {
        mapInit() {
            var myMap = new ymaps.Map("map", {
                center: [55.669986, 37.480409],
                zoom: 15,
                controls: []
            },
                {
                    restrictMapArea: [
                        [55.676224, 37.465524],
                        [55.661632, 37.493428]
                    ]
                })
            var mapDot = new ymaps.Placemark([55.669986, 37.480409], null, {
                preset: 'islands#blueCircleDotIcon'
            }
            )
            myMap.geoObjects.add(mapDot)
        }
    },
}
</script>

<style scoped>
.white-round {
    min-width: 18rem;
    width: 100%;
    height: 100%;
}

.contacts {
    width: 80%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    place-items: center;
}

.team {
    grid-area: team;
    justify-content: space-evenly;
    gap: 1rem;
}

.team ul {
    position: relative;
    list-style: none;
}

.me {
    flex-direction: column;
    row-gap: 1rem;
    font-size: 1.2rem
}

.pfp {
    width: 6rem;
    border: solid #AAA 4px;
    border-radius: 50%;
}

.address {
    grid-area: address;
    text-align: center;
}

#map {
    grid-area: map;
    border: solid 5px white;
    overflow: hidden;
    height: 40vh;
}

.form {
    grid-area: form;
    display: grid;
    position: relative;
    place-items: center;
    padding-top: 5rem;
}

.form span {
    position: absolute;
    top: 1.5rem;
    font-size: 1.5rem;
}

#name {
    grid-area: name;
}

#email {
    grid-area: email;
}

#wish {
    grid-area: wish;
}

#rating {
    grid-area: rating;
}

#submit {
    grid-area: submit;
}

#reset {
    grid-area: reset;
}


@media (max-width: 767px) {
    .white-round {
        max-width: 25rem;
    }

    .contacts {
        gap: 1rem;
        grid-template:
            "team" auto
            "address" auto
            "map" auto
            "form" auto / 1fr;
    }

    .form {
        gap: 1rem;
        grid-template:
            "name name" auto
            "email email" auto
            "wish wish" auto
            "rating rating" auto
            "submit submit" auto / 1fr 1fr
    }
}

@media (min-width: 768px) {
    .contacts {
        gap: 1.5rem;
        grid-template:
            "team address" auto
            "map map" auto
            "form form" auto / 1fr 1fr;
    }

    .form {
        gap: 1.5rem;
        grid-template:
            "name name email email" auto
            "wish wish rating rating" auto
            ". submit submit ." auto / 1fr 1fr 1fr 1fr
    }

    #map {
        width: 100%;
    }
}

@media (min-width: 1440px) {
    .contacts {
        grid-template:
            "team form" auto
            "address form" auto
            "map map" auto / 1fr 1fr
    }

    .form,
    #map {
        width: 100%;
    }
}

@media (min-width: 1870px) {
    .contacts {
        grid-template:
            "team address" auto
            "map form" auto / 1fr 1fr
    }
}
</style>