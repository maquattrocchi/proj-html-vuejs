<template>
    <section>
        <div class="container text-center">
            <section-title-component title="What's New" text="Keep up to date with the latest news"/>
            <div class="row gy-5">
                <div class="col-12 col-md-4" v-for="(item,index) in dati" :key="index">
                    <div class="new_card">
                        <span>{{item.data}}</span>
                        <div class="position-relative">
                            <img class="img-fluid" :src="item.img" alt="">
                            <div class="plus_box"><i class="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i></div>
                            <div class="cs_number">{{item.number}}</div>
                        </div>
                        <p class="fw-bold">{{item.title}}</p>
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
            <div class="cs_btn mt-5">Go to blog<i class="ms-2 fa-solid fa-angle-right"></i></div>
        </div>
    </section>
</template>

<script>
import SectionTitleComponent from './SectionTitleComponent.vue';
export default {
    name: 'SeventhSectioComponent',
    components:{
        SectionTitleComponent,
    },
    props: ['dati'],
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
    gap: 1.3rem;
    text-align: start;
    .position-relative:hover{
        cursor: pointer;
        .plus_box{
            display: block;
        }
    }
    p:first-of-type{
        color: $blueColor;
        font-size: 1.3rem;
    }
    .cs_number{
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: $orangeColor;
        padding: 0.1rem 0.5rem;
        font-size: 1.5rem;
        color: $whiteColor
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