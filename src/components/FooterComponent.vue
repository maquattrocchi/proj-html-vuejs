<template>
    <footer>
        <div class="container">
            <div class="row gy-5">
                <div  id="about" class="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3">
                    <p>About us</p>
                    <span class="line_br"></span>
                    <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi vehicula morbi.</p>
                    <img src="../assets/images/footerImg/logo_footer.png" alt="">
                </div>

                <div id="archives" class="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3" >
                    <p>Archives</p>
                    <span class="line_br"></span>
                    <ul>
                        <li v-for="(link, index) in dati[0]" :key="index"><a href="#">{{link}}</a></li>
                    </ul>
                </div>

                <div id="features" class="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3" >
                    <p>Our Features</p>
                    <span class="line_br"></span>
                    <p>Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis ac vene:</p>
                    <ul>
                        <li v-for="(item, index) in dati[1]" :key="index"><img class="me-2" src="../assets/images/footerImg/style_4_alt.png" alt="">{{item}}</li>
                    </ul>
                </div>

                <div id="recent" class="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3">
                    <p>Recent Posts</p>
                    <span class="line_br"></span>
                    <div class="row align-items-center" v-for="(card, index) in datiCard" :key="index">
                        <div class="col-5">
                            <a href="#"><img class="img-fluid" :src="card.imgFoot" alt=""></a>
                        </div>
                        <div class="col-7">
                            <ul>
                                <li class="mb-2"><a href="">{{card.title}}</a></li>
                                <li><img class="d-lg-none d-xl-inline-block" src="../assets/images/footerImg/clock_alt.png" alt="">{{card.data}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    props:['dati', 'datiCard']
}
</script>

<style lang="scss">
@import '../style/vars';
footer{
    background-image: url('../assets/images/mainImg/pattern.png');
    p:first-of-type{
        color: $whiteColor;
        font-size: 1.7rem;
        text-transform: uppercase;
    }
    .line_br{
        display: block;
        width: 50px;
        height: 2px;
        background-color: $textColor;
        margin-bottom: 1rem;
    }
    #about{
        img{
            width: 200px;
        }
    }
    #archives {
        li{
            padding: 0.5rem;
            border: 1px solid $textColor;
            margin-bottom: 0.5rem;
            a{
                color: $textColor;
                display: block;
            }
            &:hover{
                border-color: $whiteColor;
                a{
                    color: $whiteColor;
                }
            }
        }
    }
    #recent{
        ul{
            a{
                color: $whiteColor;
                font-size: 1.2rem;
                &:hover{
                    text-decoration: underline;
                }
            }
            li:nth-child(2){
                font-size: 0.8rem;
            }
            img{
                width: 20px;
                margin-right: 0.5rem;
            }
        }
    }
}

</style>