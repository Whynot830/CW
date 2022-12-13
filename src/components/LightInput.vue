<template>
    <textarea v-if="textArea" class="light-input" />

    <input v-else class="light-input"
    :value="modelValue"
    @input="updateInput"
    type="text"
    >

</template>

<script>

export default {
    name: 'lightInput',
    props: {
        modelValue: [String, Number],
        textArea: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.light-input {
    font-size: 0.95rem;
    outline: none;
    border: none;
    height: fit-content;
    width: 100%;
    max-width: 20rem;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    background-color: #DDD;
    transition: background-color 200ms;
}

textarea.light-input {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    resize: vertical;
    min-height: 3rem;

    height: 7.5rem;
    max-height: 15rem;
}

.light-input:focus {
    background-color: #EEE;
}
</style>