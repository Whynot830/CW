<template>
    <div class="check-container">
        <input :checked="modelValue" @change="toggleCheck" type="checkbox" id="check">
        <div class="checkmark"></div>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    props: {
        modelValue: Boolean,
    },
    methods: {
        toggleCheck(event) {
            this.$emit('update:modelValue', event.target.checked)
        }
    }
}
</script>

<style scoped>
.check-container {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.3rem;
    overflow: hidden;
    min-width: 1.2rem;
    min-height: 1.2rem;
}

#check {
    position: absolute;
    cursor: pointer;
    margin: 0;
    top: 0;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #00000030;
    appearance: none;
    transition: 100ms;
}


#check:checked,
#check:active {
    background-color: #424242;
}

.checkmark {
    pointer-events: none;
    position: absolute;
    top: 10%;
    left: 32%;
    width: 35%;
    height: 60%;
    transform: rotate(45deg) scale(0);
    background-color: transparent;
    border-bottom: solid white 3px;
    border-right: solid white 3px;
    border-radius: 1px;
    transition: 100ms cubic-bezier(.18, .29, .69, 1.5);
}

#check:checked~.checkmark {
    transform: rotate(45deg) scale(1);
}
</style>