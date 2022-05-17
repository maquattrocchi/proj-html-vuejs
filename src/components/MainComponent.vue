<template>
    <main>
        <jumbo-component/>
        <first-section-component text="How to Enroll Your Child to a Class?" btn="Learn More"/>
        <second-section-component/>
        <third-section-component/>
        <fourth-section-component/>
        <fifth-section-component/>
        <sixth-section-component/>
    </main>
</template>

<script>
import JumboComponent from './JumboComponent.vue';
import FirstSectionComponent from './FirstSectionComponent.vue';
import SecondSectionComponent from './SecondSectionComponent.vue';
import ThirdSectionComponent from './ThirdSectionComponent.vue';
import FourthSectionComponent from './FourthSectionComponent.vue';
import FifthSectionComponent from './FifthSectionComponent.vue';
import SixthSectionComponent from './SixthSectionComponent.vue';
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
    },
}
</script>

<style>
    main{
        margin-top: 90px;
    }
</style>