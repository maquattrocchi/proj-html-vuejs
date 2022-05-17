<template>
    <section>
        <div class="container">
            <section-title-component title="Welcome to Fable" text="Fable daycare, preschool, and kindergarten"/>
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
import SectionTitleComponent from './SectionTitleComponent.vue'
export default {
    name: 'SecondSectionComponent',
    components:{
        SectionTitleComponent,
    },
    props: ['dati']
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
    .cs_card{
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
    }
</style>