<template>
    <section>
        <div class="container d-flex justify-content-between align-items-center">
            <p class="fw-light">How to Enroll Your Child to a Class?</p>
            <div class="cs_btn btn_transparent">Learn More
                <i class="ms-2 fa-solid fa-angle-right"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FirstSectionComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
    section{
        background-color: $blueColor;
        color: $whiteColor;

        p{
            font-size: 2rem;
            margin: 0;
        }
    }
</style>