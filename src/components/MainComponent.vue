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
        <!-- mappa -->
        <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200727.57314527148!2d15.55087450000001!3d38.17811750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13144c2b02b8cde1%3A0x201eca06d521f25d!2sMessina%20ME!5e0!3m2!1sit!2sit!4v1652821426865!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <!-- /mappa -->
        <eighth-section-componenet :dati="dati.datiContact"/>
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
import EighthSectionComponenet from './EighthSectionComponenet.vue';
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
        EighthSectionComponenet,
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