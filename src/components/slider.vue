<template>
  <div class="container">
    <div class="row">
      <div class="slides">
        <div class="slide" v-for="(slide, index) in slides"
             :key="index"
             :class="[{ active: currentIndex === index }, { nextSlide: nextIndex === index }]"
             @click="slider(index)">
              <div class="slideInfo">
                <div class="col-sm-4">
                  <div class="title" :key="slide.title">{{slide.title}}</div>
                  <div class="info" :key="slide.info">{{slide.info}}</div>
                </div>
                <div class="col-sm-8">
                  <img :src="require(`./../assets/img/service/${slide.image}`)">
                </div>
          </div>
        </div>
        <div class="dots">
          <div class="dot" v-for="(slide, index) in slides"
               :key="index"
               :class="[{ active: currentIndex === index }, { nextSlide: nextIndex === index }]"
               @click="slider(index)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent( {
  name: "SliderCheck",
  props: ["slides"],
  data(){
    return{
      currentIndex: 0,
      nextIndex: 1,
    }
  },
  methods: {
    slider(index){
      console.log(this.slides[index]);
      this.currentIndex = index;
      if (this.currentIndex === this.slides.length - 1){
        this.nextIndex = 0;
      } else {
        this.nextIndex = index +1;
      }
    }
  },
  computed: {
    changeSlide(){
      return 1
    }
  }
})
</script>

<style scoped>
.slides {
  width: 100%;
  height: 500px;
  position: relative;
  padding-top: 100px;
}

.slide {
  position: absolute;
  height: 100%;
  opacity: 0;
  width: 70%;
}

.slide .slideInfo {
  display: flex;
}

.slideInfo {
  height: 100%;
}

.slideInfo .col-sm-8 {
  align-self: flex-end;
}

.slide.active {
  opacity: 1;
  z-index: 5;
}
.slide.active img {
  bottom: 0;
}

.slide.nextSlide {
  opacity: 0.3;
  right: 0;
  cursor: pointer;
  z-index: 3;
}
.slide.nextSlide img {
  bottom: 0;
}
.imageSlide {
  display: flex;
}
</style>
