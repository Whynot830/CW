<template>
    <div @mousedown="event => event.preventDefault()" class="rating-wrapper flex-center no-highlight">
        <span class="label" v-if="label">{{ label }}</span>
        <div id="bar" class="flex-center">
            <div v-for="i in [1, 2, 3, 4, 5]" :id='i' class="star">☆</div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'rating',
    props: {
        pRating: {
            type: Number,
            default: 0,
        },
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            rating: this.$props.pRating,
            disabled: false,
            stars: []
        }
    },
    methods: {
        starsInit() {
            if (this.rating != 0) {
                for (let i = 1; i <= this.rating; i++)
                    this.$el.querySelector(`[id='${i}']`).classList.add('filled')
            }
            else
                for (let i = 1; i <= 5; i++) {
                    this.stars[i] = this.$el.querySelector(`[id='${i}']`)
                    this.stars[i].addEventListener('mouseenter', this.fill)
                    this.stars[i].addEventListener('mouseleave', this.unfill)
                    this.stars[i].addEventListener('click', this.setRating)
                    this.$el.querySelector("[id='bar']").addEventListener('mouseleave', this.clearAll) //
                }
        },
        fill(event) {
            if (event.target)
                this.renderRating(event.target.id)
        },
        renderRating(rating) {
            for (let i = 1; i <= rating; i++)
                this.stars[i].classList.add('filled')
        },
        unfill(event) {
            if (event.target)
                event.target.classList.remove('filled')
        },
        clearAll() {
            if (this.rating === 0)
                this.$el.querySelectorAll('.filled').forEach(star => star.classList.remove('filled'))
        },
        setRating(event) {
            if (event.target) {
                this.rating = event.target.id
                for (let i = 1; i <= 5; i++) {
                    this.stars[i].removeEventListener('mouseenter', this.fill)
                    this.stars[i].removeEventListener('click', this.setRating)
                    this.stars[i].removeEventListener('mouseleave', this.unfill)
                    this.$el.removeEventListener('mouseleave', this.clearAll) //
                }
            }
        },
    },
    mounted() {
        this.starsInit()
    }
}
</script>

<style scoped>
.rating-wrapper {
    flex-flow: column;
}

.label {
    font-size: 1.2rem;
}

#bar {
    cursor: pointer;
}

.star {
    font-size: 1.5rem;
    transition: 100ms;
    padding: 0 0.5rem;
}

.star::before {
    content: "\2605";
    position: absolute;
    opacity: 0;
    transition: 100ms;
}

.star.filled::before {
    opacity: 1;
}
</style>