<template>
    <div class="mb-5 text-center">
        <h1>{{title}}</h1>
        <p class="mb-4">{{text}}</p>
        <img src="../assets/images/mainImg/header_divider.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'SectionTitleComponent',
    props: ['title','text']
}
</script>

<style lang="scss">
@import '../style/vars';
    h1{
        color: $blueColor;
        font-size: 3rem;
    }
</style>