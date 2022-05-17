<template>
    <section>
        <div class="container text-center">
            <h1>What's New</h1>
            <p class="mb-2">Keep up to date with the latest news</p>
            <img src="../assets/images/mainImg/header_divider.png" alt="">
            <div class="row mt-4">
                <div class="col-4" v-for="(item,index) in dati" :key="index">
                    <div class="new_card">
                        <span>{{item.data}}</span>
                        <div class="position-relative">
                            <img class="img-fluid" :src="item.img" alt="">
                        </div>
                        <p>{{item.title}}</p>
                        <p>{{item.text}}</p>
                        <div class="d-flex cs_border">
                            <div class="col-6">
                                <img src="../assets/images/mainImg/author.png" alt=""> 
                                <span>{{item.author}}</span>
                            </div>
                            <div class="col-6">
                                <img src="../assets/images/mainImg/category.png" alt="">
                                <span>{{item.category}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import dati from '../dati'
export default {
    name: 'SeventhSectioComponent',
    data(){
        return{
            dati: dati.datiNewCard
        }
    }
}
</script>

<style lang="scss">
@import '../style/vars';
h1{
    color: $blueColor;
    font-size: 3rem;
}
.new_card{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: start;
    p:first-of-type{
        color: $blueColor;
        font-size: 1.3rem;
    }
    .cs_border{
        padding-top: 0.7rem;
        border-top: 1px solid $textColor;
        img{
            margin-right: 1rem;
        }
    }
}
</style>