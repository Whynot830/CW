<template>
    <button class="dark-button">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'darkButton'
}
</script>
<style scoped>

.dark-button {
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #444;
    width: max-content;
    height: fit-content;
    margin: 10px;
    padding: 1rem;
    border-radius: 3rem;
    transition: 150ms;
}

.dark-button:focus-visible,
.dark-button.dark-button:hover {
    background-color: #555;
}

.dark-button:active {
    background-color: #444;
    color: lightgray;
}
</style>