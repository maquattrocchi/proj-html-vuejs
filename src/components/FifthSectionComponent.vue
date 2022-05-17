<template>
    <section>
        <div class="container">
            <div class="row gy-5">
                <div class="col-12 col-md-6 d-flex flex-column gap-3">
                    <p class="section_title">We have been educating children for over fifteen years. Our goal is to create a place that engages each child.</p>
                    <p>Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.</p>
                    <ul>
                        <li> 
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Comprehensive reporting on individual achievement</span>
                        </li>
                        <li> 
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Educational field trips and school presentations</span>
                        </li>
                        <li> 
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Individual attention in a small-class setting</span>
                        </li>
                        <li> 
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Learning program with after-school care</span>
                        </li>
                        <li>
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Opportunities to carry out scientific investigations</span>
                        </li>
                        <li> 
                            <img src="../assets/images/mainImg/list_style.png" alt="list style"> 
                            <span class="align-middle ms-2">Positive learning environment for your child</span>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row g-3">
                        <div class="col-6" v-for="(item, index) in dati" :key="index">
                            <div class="cs_card">
                                <div class="cs_card_img">
                                    <img class="position-absolute top-50 start-50 translate-middle" :src="item.icon" alt="">
                                </div>
                                <h4>{{item.title}}</h4>
                                <p>{{item.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'FifthSectionComponent',
    props: ['dati'],
}
</script>

<style lang="scss" scoped>
@import '../style/vars';
section{
    background-color: $bgSection;

    .cs_card{
        .cs_card_img{
            height: 80px;
            width: 80px;
            border-radius: 50%;
            background-color: $whiteColor;
            border-radius: 50%;
            position: relative;
        }
    }
}

</style>