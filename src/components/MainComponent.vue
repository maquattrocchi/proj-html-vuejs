<template>
    <main>
        <jumbo-component/>
        <first-section-component text="How to Enroll Your Child to a Class?" btn="Learn More"/>
        <second-section-component :dati="dati.datiWelcome"/>
        <third-section-component :datiSlider="dati.datiSlider"/>
        <fourth-section-component :dati="dati.datiClassCard"/>
        <fifth-section-component :dati="dati.datiCardEducation"/>
        <sixth-section-component :dati="dati.datiCarousel"/>
        <seventh-section-component :dati="dati.datiNewCard"/>
    </main>
</template>

<script>
import dati from '../dati'
import JumboComponent from './JumboComponent.vue';
import FirstSectionComponent from './FirstSectionComponent.vue';
import SecondSectionComponent from './SecondSectionComponent.vue';
import ThirdSectionComponent from './ThirdSectionComponent.vue';
import FourthSectionComponent from './FourthSectionComponent.vue';
import FifthSectionComponent from './FifthSectionComponent.vue';
import SixthSectionComponent from './SixthSectionComponent.vue';
import SeventhSectionComponent from './SeventhSectionComponent.vue';
export default {
    name:'MainComponent',
    components: { 
        JumboComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        ThirdSectionComponent,
        FourthSectionComponent,
        FifthSectionComponent,
        SixthSectionComponent,
        SeventhSectionComponent,
    },
    data(){
        return{
            dati: dati
        }
    }
}
</script>

<style>
    main{
        margin-top: 90px;
    }
    @media screen and (max-width: 991px) {
    main{
        margin-top: 0;
    }
}
</style>