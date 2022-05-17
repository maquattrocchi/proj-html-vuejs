<template>
    <section>
        <div class="container d-flex gap-3 justify-content-between align-items-center">
            <p class="fw-light">{{text}}</p>
            <div class="cs_btn btn_transparent">
                <a href="#">{{btn}}</a> 
                <i class="ms-2 fa-solid fa-angle-right"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FirstSectionComponent',
    props: ['text', 'btn']
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
    section{
        background-image: url('../assets/images/mainImg/pattern.png');
        background-attachment: fixed;
        color: $whiteColor;
        p{
            font-size: 2rem;
        }
    }
</style>