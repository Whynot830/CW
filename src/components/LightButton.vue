<template>
    <button class="light-button">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'lightButton'
}
</script>
<style scoped>

.light-button {
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #444;
    background-color: #DDD;
    width: max-content;
    height: fit-content;
    margin: 10px;
    padding: 1rem;
    border-radius: 3rem;
    transition: 150ms;
}

.light-button:focus-visible,
.light-button:hover {
    background-color: #EEE;
}

.light-button:active {
    background-color: #DDD;
    color: black;
}

</style>