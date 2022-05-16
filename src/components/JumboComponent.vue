<template>
    <section>
        <div class="container position-relative">
            <div class="box_img">
                <img src="../assets/images/JumboImg/slider_icon10.png" alt="">
                <img src="../assets/images/JumboImg/slider_icon14.png" alt="">
                <img src="../assets/images/JumboImg/slider_icon11.png" alt="">
                <img src="../assets/images/JumboImg/slider_icon12.png" alt="">
                <img src="../assets/images/JumboImg/slider_icon13.png" alt="">
            </div>

            <img class="img_bg" src="../assets/images/JumboImg/slider_slide2_img2.png" alt="">

            <div class="row">
                <div class="col-5">
                    <p class="fw-bold">Friendly atmosphere</p>
                    <p class="fw-bold">Welcoming Place</p>
                    <p class="fw-light">For Every Child</p>
                    <div class="cs_btn mt-4">Buy this theme now</div>
                </div>
                <div class="col-5">
                    <img src="../assets/images/JumboImg/slider_slide2_img1.png" alt="">
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
                
                &:nth-child(2){
                    top: 70px;
                    left: 5px;
                }
                &:nth-child(3){
                    right: 10px;
                }
                &:nth-child(4){
                    top: 75px;
                    right: 20px;
                }
                &:nth-child(5){
                    top: 16px;
                }
            }
        }
        .img_bg{
            position: absolute;
            right: 0;
            width: 400px;
        }
        .row{
            align-items: center;
            position: relative;
            line-height: 3.3rem;
            z-index: 1;
            p{
                font-size: 3rem;
                margin-bottom: 0;
                color: $blueColor
            }
            p:first-of-type{
                font-family: "Kodchasan", sans-serif;
                font-size: 1.8rem;
                color: $orangeColor
            }
            img{
                width: 400px;
            }
            .btn{
                background-color: $orangeColor;
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>