<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss';
export default defineComponent({
    name: 'Swiper',
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper:any) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  });
</script>

<style lang="scss" scoped>

</style>