<template>
    <div>
        <div class="d-flex">
            <div class="col-3">
                <img class="img-fluid" src="../assets/images/mainImg/slider_02.jpg" alt="">
            </div>
            <div class="col-3">
                <img class="img-fluid" src="../assets/images/mainImg/gallery_02.jpg" alt="">
            </div>
            <div class="col-3">
                <img class="img-fluid" src="../assets/images/mainImg/gallery_03.jpg" alt="">
            </div>
            <div class="col-3">
                <img class="img-fluid" src="../assets/images/mainImg/class_01.jpg" alt="">
            </div>
        </div>

        <first-section-component text="See Our Kindergarten Photo Gallery!" btn="View Gallery"/>

        <div class="carousel" @mouseover="stopScroll()" @mouseleave="autoScroll()">
            <div class="d-flex flex-column gap-4">
                <div class="img_box">
                    <img class="position-absolute top-50 start-50 translate-middle" src="../assets/images/mainImg/quote_carousel.png" alt="">
                </div>
                <h2 class="fw-light" :class="{'animation' : setAnimation}">{{dati[currentIndex].text}}</h2>
                <div class="cs_line"></div>
                <p>{{dati[currentIndex].author}}</p>
                <div class="carousel_control d-flex gap-3">
                    <div v-for="(item,index) in 6" :key="index" :class="{'selected': index === currentIndex}" @click="selectSlide(index)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FirstSectionComponent from './FirstSectionComponent.vue'
export default {
    name:'SixthSectionComponent',
    components: {
        FirstSectionComponent 
    },
    props:['dati'],
    data(){
        return{
            currentIndex: 0,
            setAnimation: false,
            timer: null,
        }
    },
    methods:{
        autoScroll(){
            this.timer = setInterval(()=>{
                this.setAnimation = false;
                this.currentIndex === this.dati.length -1 ? this.currentIndex = 0 : this.currentIndex++
                setTimeout(() => {
                    this.setAnimation = true;
                }, 1);
            },5000)
        },
        stopScroll(){
            clearInterval(this.timer);
            this.timer = null;
        },
        selectSlide(index){
            this.setAnimation = false;
            setTimeout(() => {
                this.setAnimation = true;
            }, 1);
            this.currentIndex = index
        }
    },
    mounted(){
        this.autoScroll()
    }
}
</script>

<style lang="scss">
@import '../style/vars';
    .carousel{
        padding: 5.5rem;
        background-image: url('../assets/images/mainImg/bg_sixth.jpg');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;

        >div{
            align-items: center;
            color: $whiteColor;
            text-align: center;
            .img_box{
                width: 70px;
                height: 70px;
                border-radius: 50%;
                position: relative;
                border: 2px solid $whiteColor;
            }
            .cs_line{
                width: 50px;
                height: 2px;
                background-color: $whiteColor;
            }
            .carousel_control{
                div{
                    padding: 0.4rem 1.2rem;
                    cursor: pointer;
                    border: 2px solid $whiteColor;
                    transition: transform 1s;

                    &:hover{
                        border-color: $textColor;
                    }
                    &.selected{
                        transform: translateY(-15px);
                    }
                }
            }
            .animation{
                animation: text-animation 0.6s linear;
            }
        }
    }
    @keyframes text-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
}
</style>