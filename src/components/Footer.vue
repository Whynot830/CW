<template>
    <footer class="footer no-highlight flex-center">
        <div class="flex-center" style="gap: 1rem">
            <img class="contacts-img" style="width: 1.8rem; height: 1.8rem;" src="@/assets/svgs/github.svg">
            <img class="contacts-img" style="width: 1.8rem; height: 1.8rem;" src="@/assets/svgs/vk.svg">
            <img class="contacts-img" style="width: 1.8rem; height: 1.8rem;" src="@/assets/svgs/telegram.svg">
            <img class="contacts-img" style="width: 1.8rem; height: 1.8rem;" src="@/assets/svgs/spotify.svg">
        </div>
        <span style="font-size: 0.8rem">
            © WhyNot 2022, All Rights Reserved
        </span>
    </footer>
</template>

<script>
export default {
    name: 'vueFooter'
}
</script>

<style>
.footer {
    flex-flow: column nowrap;
    row-gap: 0.5rem;
    background: #FFF;
    box-shadow: 0px -4px 15px -13px #777;
}
</style>