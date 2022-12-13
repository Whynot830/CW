<template>
    <div class="burger-btn-wrap flex-center">
        <span class="burger-btn-line"></span>
    </div>
</template>
 
<script>

export default {
    name: 'burgerButton'
}
</script>
 
<style scoped>

.burger-btn-wrap {
    position: relative;
    z-index: 2;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
}

.burger-btn-line, 
.burger-btn-line::after, 
.burger-btn-line::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.25rem;
    background-color: #555;
    border-radius: 5px;
    transition: 150ms;
}

.burger-btn-line::before {
    top: -0.6rem;
}

.burger-btn-line::after {
    top: 0.6rem;
}

.burger-btn-wrap:hover .burger-btn-line,
.burger-btn-wrap:hover .burger-btn-line::after,
.burger-btn-wrap:hover .burger-btn-line::before {
    background-color: #888;
}

.burger-btn-wrap:active .burger-btn-line,
.burger-btn-wrap:active .burger-btn-line::after,
.burger-btn-wrap:active .burger-btn-line::before {
    background-color: #333;
}

.burger-active .burger-btn-line {
    background-color: transparent !important
}
.burger-active .burger-btn-line::after {
    top: 0;
    transform: rotate(45deg)
}
.burger-active .burger-btn-line::before {
    top: 0;
    transform: rotate(-45deg)
}

</style>