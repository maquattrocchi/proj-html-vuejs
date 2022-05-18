<template>
    <header>
        <div class="d-none d-lg-block h-100">
            <div class="container d-flex justify-content-between h-100 align-items-center align-items-lg-stretch">
                <img src="../assets/images/headerImg/logo.png" alt="logo">
                <ul>
                    <li 
                    v-for="(item, index) in datiHeader" :key="index" 
                    :class="{'selected': index === currentIndex}" @mouseover="item.active = true" 
                    @mouseout="item.active = false"
                    @click="currentIndex = index">
                        <img :src="index === currentIndex || item.active ? item.iconSelect : item.icon" alt="">
                        <a :href="item.link" :class="{'selected': index === currentIndex}">{{item.nome}}</a>
                        <ul>
                            <li v-for="(link, index) in datiHeader[index].list" :key="index">
                                <a href="">{{link}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d-block d-lg-none text-center cs_collapse_menu">
            <img src="../assets/images/headerImg/logo.png" alt="logo">
            <div class="cs_nav"
            :class="{'selected' : selected}">
                <div>Menu</div>
                <i class="fa-solid fa-bars" 
                @click="selected = !selected">
                </i>
            </div>
            <ul class="text-start" 
            :class="{'d-block': selected}">
                <li v-for="(item, index) in datiHeader" :key="index"
                :class="{'selected': index === currentIndex}" 
                @click="currentIndex = index">
                    <a :href="item.link" 
                    :class="{'selected': index === currentIndex}">{{item.nome}}</a>
                    <ul>
                        <li v-for="(link, index) in datiHeader[index].list" :key="index">
                            <a href="">{{link}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return {
            currentIndex: 0,
            selected: false,
        }
    },
    props:['datiHeader']
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
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 0 0.8rem;
            font-size: 0.8rem;
            cursor: pointer;
            &.selected, &:hover{
                background-color: $orangeColor; 
                >a{
                    color: $whiteColor;
                }
            }
            &:hover{
                ul{
                    display: block;
                }
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
            ul{
                width: 400px;
                position: absolute;
                top: 100%;
                right: -20px;
                background-color: $whiteColor;
                border-top: 2px solid $orangeColor;
                padding: 0.5rem;
                display: none;
                animation: list-open 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
                li{
                    align-items: start;
                    padding: 0.5rem;
                    a{
                        color: $textColor
                    }
                }
            }
        }
    }
    // hamburger menu
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
                a{
                    color: $textColor;
                    &.selected{
                        color: $whiteColor
                    }
                }
                ul{
                    padding: 0;
                    position: static;
                    width: 100%;
                }
                &:hover{
                    >a{
                        color: $whiteColor
                    }
                }
            }
        }
    }
}

@keyframes list-open {
    0% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
    }
    100% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
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