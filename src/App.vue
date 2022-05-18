<template>
    <div>
        <header-component :datiHeader="dati.datiHeader"/>
        <main-component/>
        <footer-component :datiCard="dati.datiNewCard" :dati="dati.datiFooter"/>
    </div>
</template>

<script>
import dati from './dati'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    components:{
        HeaderComponent,
        MainComponent,
        FooterComponent
    },
    data(){
        return{
            dati: dati,
        }
    }
}
</script>

<style lang="scss">
@import './style/general.scss';
</style>
