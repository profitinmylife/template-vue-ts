<template>
  <swiper
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    navigation
    :pagination="{ clickable: true, type: 'fraction' }"
  >
    <swiper-slide v-for="item in items" :key="item">
      <div class="container">
        <div class="infoBlock">
          <p class="infoSlide">Портфолио</p>
          <p class="titleSlide" :key="item.titleSlide">{{item.titleSlide}}</p>
          <p class="firstTextSlide" :key="item.infoText">{{item.infoText}}</p>
          <p class="secondTextSlide" :key="item.InfoTextSecond">{{item.InfoTextSecond}}</p>
        </div>
        <navigation/>
      </div>
      <div class="imageSlide">
        <img :src="require(`./../assets/img/slides/${item.slideImage}`)">
      </div>
    </swiper-slide>

    <pagination/>
    <div class="prt__button"><a href="#">Обсудить ваш проект</a></div>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SwiperCore, {Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination]);

export default defineComponent({
    name: 'SwiperQW',
    components: {
      Swiper,
      SwiperSlide,
      Navigation,
      Pagination,
    },
    props: ["items"],
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  });
</script>

<style lang="scss" scoped>
.swiper-slide{
  //background-image: url("./../assets/img/slides/background.png");
  background-color: #1b575d;
  background-repeat: no-repeat;
  overflow: hidden;
}
.swiper-slide img {
  height: 100%;
  overflow: hidden;
  opacity: 0.3;
}
.swiper-container {
  height: 100vh;
  background: #1b575d;
}
.imageSlide{
  text-align: end;
}
.infoBlock {
  flex-grow: 1;
  align-self: center;
  width: 75%;
  color: #f6f6f6;
  padding: 100px 0;
}
.imageSlide{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
}

.titleSlide{
  font-size: 80px;
  color: #ffff;
  font-weight: 700;
}

.prt__button{
  position: absolute;
}
.prt__button a {
  padding: 20px 40px;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #4dbdc6;
  font-size: 24px;
  color: #4dbdc6;
}

.prt__button a:hover {
  background-color: #4dbdc6;
  color: #ffff;
}
</style>