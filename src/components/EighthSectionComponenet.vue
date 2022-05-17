<template>
    <section>
        <div class="container">
            <section-title-component title="Contact Us" text="Our postal address and contact details"/>
            <div class="row gy-3">
                <div class="col-6 col-lg-3" v-for="(item, index) in dati" :key="index">
                    <div class="cs_card">
                        <img :src="item.icon" :alt="item.title">
                        <h4>{{item.title}}</h4>
                        <div>
                            <p>{{item.text1}}</p>
                            <p>{{item.text2}}</p>
                            <p>{{item.text3}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 col-md-6">
                    <div class="mb-4">
                        <input class="cs_input" type="text" placeholder="Your Name *">
                    </div>
                    <div class="mb-4">
                        <input class="cs_input" type="text" placeholder="Your Email *">
                    </div>
                    <div class="mb-4 mb-md-0">
                        <input class="cs_input" type="text" placeholder="Subject">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <textarea class="cs_input" name="text" id="text" placeholder="Your Message *"></textarea>
                </div>
                <div class="col-12 text-center mt-5">
                    <div class="cs_btn">Send Message</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitleComponent from './SectionTitleComponent.vue'
export default {
    name:'EightSectionComponent',
    components:{
        SectionTitleComponent,
    },
    props: ['dati']
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
.cs_input{
    width: 100%;
    color: $textColor;
    padding: 0.5rem 1rem;
    border: 1px solid $textColor;
    &:focus{
        border: none;
        border-bottom: 2px solid $orangeColor;
        box-shadow: none;
        outline: none;
        color: $textColor;
    }
}
textarea{
    height: 100%;
    width: 100%;
    resize: none;
}
@media screen and (max-width: 767px){
    textarea{
        height: 200px;
    }
}
</style>
