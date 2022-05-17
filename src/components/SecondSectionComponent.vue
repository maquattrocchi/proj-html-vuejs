<template>
    <section>
        <div class="container text-center">
            <h1>Welcome to Fable</h1>
            <p class="mb-2">Fable daycare, preschool, and kindergarten</p>
            <img class="mb-5" src="../assets/images/mainImg/header_divider.png" alt="">
            <div class="row gy-3">
                <div class="col-12 col-md-6 col-lg-3" v-for="(item, index) in dati" :key="index">
                    <div class="cs_card">
                        <div class="cs_card_img" :class="{'blue_bg': item.blueBg}">
                            <img class="position-absolute top-50 start-50 translate-middle" :src="item.icon" alt="">
                        </div>
                        <h4>{{item.title}}</h4>
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//import dati from '../dati'
export default {
    name: 'SecondSectionComponent',
    props: ['dati']
    // data(){
    //     return{
    //         dati: dati.datiWelcome,
    //     }
    // }
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
    h1{
        color: $blueColor;
        font-size: 3rem;
    }
    .cs_card{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;

        .cs_card_img{
            height: 170px;
            width: 170px;
            border-radius: 50%;
            background-color: $orangeColor;
            border-radius: 50%;
            position: relative;

            &.blue_bg{
                background-color: $blueColor;
            }
        }
        h4{
            color: $blueColor;
            font-weight: 700;
        }
    }
</style>