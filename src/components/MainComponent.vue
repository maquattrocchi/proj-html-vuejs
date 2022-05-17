<template>
    <main>
        <jumbo-component/>
        <first-section-component/>
        <second-section-component/>
        <third-section-component/>
        <fourth-section-component/>
        <fifth-section-component/>
    </main>
</template>

<script>
import JumboComponent from './JumboComponent.vue';
import FirstSectionComponent from './FirstSectionComponent.vue';
import SecondSectionComponent from './SecondSectionComponent.vue';
import ThirdSectionComponent from './ThirdSectionComponent.vue';
import FourthSectionComponent from './FourthSectionComponent.vue';
import FifthSectionComponent from './FifthSectionComponent.vue';
export default {
    name:'MainComponent',
    components: { 
        JumboComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        ThirdSectionComponent,
        FourthSectionComponent,
        FifthSectionComponent,
    },
}
</script>

<style>

</style>