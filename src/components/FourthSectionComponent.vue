<template>
    <section>
        <div class="container text-center">
            <h1>Our classes</h1>
            <p class="mb-2">Our preschool program has four dedicated classes</p>
            <img class="mb-5" src="../assets/images/mainImg/header_divider.png" alt="">
            <div class="row text-start g-4">
                <div class="col-12 col-md-6">
                   <p class="section_title">We provided four classes with nine to twenty children each aged twelve month to five years of age.</p>
                </div>
                <div class="col-12 col-md-6">
                    <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas</p>
                </div>
                <div class="col-12 col-lg-6 class_card" v-for="(item,index) in dati" :key="index">
                    <div class="card_description col-6">
                        <div>
                            <p class="fs-4">{{item.title}}</p>
                            <p>Class name</p>
                        </div>
                        <div class="d-flex text-center">
                            <div class="info">
                                <p>{{item.age}}</p>
                                <p>{{item.type}}</p>
                            </div>
                            <div class="info">
                                <p>{{item.class}}</p>
                                <p>Class size</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 position-relative">
                        <img :src="item.img" class="img-fluid" :alt="item.title">
                        <div class="cs_btn">Read More <i class="ms-2 fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FourthSectionComponent',
    props: ['dati'],
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
h1{
    color: $blueColor;
    font-size: 3rem;
}
.class_card{
    display: flex;
    .card_description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        background-color: $blueColor;
        color: $whiteColor;

        .info{
            width: 50%;

            &:first-of-type{
                border-right: 1px solid $textColor;
            }
        }
    }
    .cs_btn{
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>