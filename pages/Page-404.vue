<template>
    <div>
        <!-- swiper1 -->
        <swiper ref="swiperTop" class="swiper gallery-top" :options="swiperOptionTop">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
            <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
            <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
    </div>
</template>
<script>
    import { directive } from "vue-awesome-swiper";

    export default {
        name: "Slider",
        directives: {
            swiper: directive,
        },
        data() {
            return {
                banners: ["https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", "https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1640185906080-ebcd4fdf47c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            };
        },
    };
</script>
<style lang="scss">
    .thumb-example {
        height: 480px;
        background-color: #000;
    }

    .swiper {
        .swiper-slide {
            background-size: cover;
            background-position: center;

            &.slide-1 {
                background-image: url('/images/example/1.jpg');
            }

            &.slide-2 {
                background-image: url('/images/example/2.jpg');
            }

            &.slide-3 {
                background-image: url('/images/example/4.jpg');
            }

            &.slide-4 {
                background-image: url('/images/example/5.jpg');
            }

            &.slide-5 {
                background-image: url('/images/example/6.jpg');
            }
        }

        &.gallery-top {
            height: 80%;
            width: 100%;
        }

        &.gallery-thumbs {
            height: 20%;
            box-sizing: border-box;
            padding: 12px 0;
        }

        &.gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
        }

        &.gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
    }
</style>