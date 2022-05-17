<template>
    <section>
        <div class="container">
            <div class="row gy-5 align-items-center">
                <!-- left side -->
                <div class="col-12 col-lg-6">
                    <div class="info">Overview</div>
                    <div class="d-inline-block info">Our Mission</div>

                    <p class="my-4 section_title">Our philosophy is learning through play as we offer a stimulating enviroment fro children</p>

                    <div class="d-flex align-items-center gap-3 mb-4">
                        <div class="col-2">
                            <div class="icon_box">
                                <img src="../assets/images/mainImg/clock_alt.png" alt="">
                            </div>
                        </div>
                        <div class="col-10">
                            <div>
                                <p class="fs-4">Full Day Sessions</p>
                                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto quis in.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <div class="col-2">
                            <div class="icon_box">
                                <img src="../assets/images/mainImg/diagram_alt.png" alt="">
                            </div>
                        </div>
                        <div class="col-10">
                            <div>
                                <p class="fs-4">Varied Classes</p>
                                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto quis in.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right side -->
                <div class="col-12 col-lg-6 slider">
                    <div class="d-flex flex-column gap-3 ">

                    <div class="cs_item">
                        <img :src="datiSlider[currentIndexActive].img" alt=""/>

                        <div class="prev" @click="prevSlide">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        
                        <div class="next" @click="nextSlide">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>

                    <div class="row gx-3">
                        <div class="col-4"  v-for="(thumb, index) in datiSlider" :key="index" @click="currentIndexActive = index">
                            <img class="cs_thumb" :class="{'active': index === currentIndexActive}" :src="thumb.img" alt="">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'ThirdSectionComponent',
    props:['datiSlider'],
    data(){
        return {
            currentIndexActive: 2,
        }
    },
    methods:{
        nextSlide(){
           this.currentIndexActive === this.datiSlider.length - 1 ? this.currentIndexActive = 0 : this.currentIndexActive++
        },
        prevSlide(){
            this.currentIndexActive === 0 ? this.currentIndexActive = this.datiSlider.length - 1 : this.currentIndexActive--
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
    section{
        background-color: $bgSection;

        .info{
            background-color: #fe6601;
            color: $whiteColor;
            line-height: 1.5rem;
            padding: 0.8rem 1.5rem;
            cursor: pointer;
            display: inline-block;
            position: relative;

            &:nth-child(1)::after{
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-top: solid 12px $orangeColor;
                    border-left: solid 12px transparent;
                    border-right: solid 12px transparent;
            }
            &:nth-child(2){
                margin-left: 1rem;
                background-color: transparent;
                color: $textColor;
                border-bottom: 1px solid $textColor;
            }
        }
        p:first-of-type{
            color: $blueColor;
        }
        .icon_box{
            width: 70px;
            height: 70px;
            background-color: $orangeColor;
            border-radius: 50%;
            position: relative;

            img{
                position: absolute;
                width: 30px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .slider{
            img{
                width: 100%;
                cursor: pointer;
            }
            .cs_item{
                position: relative;
            }
            .cs_thumb{
                padding-bottom: 1rem;
                border-bottom: 1px solid transparent;
    
                &.active{
                    border-color: $orangeColor;
                }
            }
            .prev,
            .next{
                cursor: pointer;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: $orangeColor;
                color: $whiteColor;
                padding: 0.8rem 1rem;

                &:hover{
                    background-color: $blueColor;
                }
            }
            .next{
                right: 0;
            }
        }
    }
</style>