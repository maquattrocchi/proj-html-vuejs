<template>
    <header>
        <div class="d-none d-lg-block h-100">
            <div class="container d-flex justify-content-between h-100 align-items-center align-items-lg-stretch">
                <img src="../assets/images/headerImg/logo.png" alt="logo">
                    <ul>
                        <li v-for="(item, index) in datiHeader" :key="index" :class="{'selected': index === currentIndex}" @click="currentIndex = index">
                            <img :src="index === currentIndex ? item.iconSelect : item.icon" alt="">
                            <a :href="item.link" :class="{'selected': index === currentIndex}">{{item.nome}}</a>
                        </li>
                    </ul>
            </div>
        </div>
        <div class="d-block d-lg-none text-center cs_collapse_menu">
                <img src="../assets/images/headerImg/logo.png" alt="logo">
            <div class="cs_nav" :class="{'selected' : selected}">
                <div>Menu</div>
                <i class="fa-solid fa-bars" @click="selected = !selected">
                </i>
            </div>
            <ul class="text-start" :class="{'d-block': selected}">
                <li v-for="(item, index) in datiHeader" :key="index" :class="{'selected': index === currentIndex}" @click="currentIndex = index"><a :href="item.link" :class="{'selected': index === currentIndex}">{{item.nome}}</a></li>
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
            datiHeader: dati.datiHeader,
            currentIndex: 0,
            selected: false,
        }
    },
}
</script>

<style lang="scss">
@import '../style/vars';
header{
    background-color: $whiteColor;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    img {
        width: 130px;
    }
    ul{
        display: flex;

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
    .cs_collapse_menu{
        .cs_nav{
            width: 400px;
            padding-left: 0.8rem;
            border: 1px solid $textColor;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover, &.selected{
                background-color: $orangeColor;
                border-color: transparent;
                color: $whiteColor;

                .fa-solid{
                    border: none;
                    color: $whiteColor;
                }
            }
            .fa-solid{
                border-left: 1px solid $textColor;
                padding: 0.5rem 0.8rem;
                color: $orangeColor;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
        ul{
            display: none;
            width: 400px;
            margin: auto;
            li{
                border: 1px solid $textColor;
                border-top: none;
                padding: 0.3rem 1rem;
                display: block;
                a{
                    color: $textColor;
                    &.selected{
                        color: $whiteColor
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 991px) {
    header{
        padding: 2rem 0;
        height: auto;
        position: relative;
    }
}
</style>