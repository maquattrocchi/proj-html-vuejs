<template>
    <section>
        <div class="container position-relative">
            <div class="box_img">
                <img class="d-none d-md-inline-block" src="../assets/images/JumboImg/slider_icon10.png" alt="">
                <img class="d-none d-md-inline-block" src="../assets/images/JumboImg/slider_icon14.png" alt="">
                <img class="d-none d-md-inline-block" src="../assets/images/JumboImg/slider_icon11.png" alt="">
                <img class="d-none d-md-inline-block" src="../assets/images/JumboImg/slider_icon12.png" alt="">
                <img class="d-none d-md-inline-block" src="../assets/images/JumboImg/slider_icon13.png" alt="">
            </div>

            <img class="img_bg d-none d-lg-block anim_img" src="../assets/images/JumboImg/slider_slide2_img2.png" alt="">

            <div class="row">
                <div class="col-12 col-md-5">
                    <p class="fw-bold anim_text">Friendly atmosphere</p>
                    <p class="fw-bold anim_text">Welcoming Place</p>
                    <p class="fw-light anim_text">For Every Child</p>
                    <div class="cs_btn mt-4 anim_text">
                        <a href="#">Buy this theme now</a>
                    </div>
                </div>
                <div class="col-5 d-none d-md-block">
                    <img class="anim_img" src="../assets/images/JumboImg/slider_slide2_img1.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'JumboComponent'
}
</script>

<style lang="scss" scoped>
@import "@fontsource/kodchasan/400.css";
@import '../style/vars';

    section{
        background-image: url('../assets/images/JumboImg/slider_slide2_background.png');
        background-size: contain;

        .box_img{
                position: absolute;
                right: 40%;
                padding: 1rem;
                & img{
                    position: relative;
                    animation: box-appear 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                    &:nth-child(1){
                        animation-delay: 5.6s;
                    }
                    &:nth-child(2){
                        top: 70px;
                        left: 5px;
                        animation-delay: 5.2s;
                    }
                    &:nth-child(3){
                        right: 10px;
                        animation-delay: 4.8s;
                    }
                    &:nth-child(4){
                        top: 75px;
                        right: 20px;
                        animation-delay: 4.4s;
                    }
                    &:nth-child(5){
                        top: 16px;
                        animation-delay: 4.1s;
                    }
                }
            }
        .img_bg{
            position: absolute;
            right: 0;
            animation-delay: 2s;
        }
        .row{
            align-items: center;
            position: relative;
            line-height: 3.3rem;
            z-index: 1;
            p{
                font-size: 3rem;
                color: $blueColor
            }
            p:first-of-type{
                font-family: "Kodchasan", sans-serif;
                font-size: 1.8rem;
                color: $orangeColor
            }
            img{
                width: 400px;
                animation-delay: 1s;
            }
            .anim_text{
                animation: text-appear 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                &:nth-child(1){
                    animation-delay: 2.5s;
                }
                &:nth-child(2){
                    animation-delay: 2.9s;
                }
                &:nth-child(3){
                    animation-delay: 3.3s;
                }
            }
            .cs_btn{
                animation: text-appear 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation-delay: 3.7s;
            }
        }
        .anim_img{
            animation: img-appear 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
    }
    // animation
@keyframes box-appear {
    0% {
        transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 100%;
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        opacity: 1;
    }
}
@keyframes img-appear {
    0% {
        transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes text-appear {
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

</style>