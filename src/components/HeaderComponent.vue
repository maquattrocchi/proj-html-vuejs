<template>
    <header>
        <div class="container d-flex justify-content-between">
            <img src="../assets/images/headerImg/logo.png" alt="logo">
            <ul>
                <li v-for="(item, index) in datiHeader" :key="index" :class="{'selected': item.active}">
                    <img :src="item.active ? item.iconSelect : item.icon" alt="">
                    <a :href="item.link" :class="{'selected': item.active}">{{item.nome}}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import dati from '../dati'
export default {
    name: 'HeaderComponent',
    data(){
        return {
            datiHeader: dati[0],
        }
    },
}
</script>

<style lang="scss">
@import '../style/vars';
header{
    
    img {
        width: 130px;
    }
    ul{
        list-style: none;
        display: flex;
        margin-bottom: 0;
        gap: 0.5rem;

        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 0.8rem;
            gap: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            &.selected, &:hover{
                background-color: $orangeColor;
            }
            img{
                width: 25px;
            }
            a{
                color: $blueColor;
                font-weight: bold;
                &.selected{
                    color: $whiteColor;
                }
            }
        }
    }
}
</style>