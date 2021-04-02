<template>
  <div class="slides">
    <div class="slide" v-for="(slide, index) in slides"
         :key="index"
         :class="[{ active: currentIndex === index }, { nextSlide: nextIndex === index }]"
         @click="slider(index)">
      <div class="title" :key="slide.title">{{slide.title}}</div>
      <div class="info" :key="slide.info">{{slide.info}}</div>
      <img :src="require(`./../assets/img/service/${slide.image}`)">
    </div>
    <div class="dots">
      <div class="dot" v-for="(slide, index) in slides"
           :key="index"
           :class="[{ active: currentIndex === index }, { nextSlide: nextIndex === index }]"
           @click="slider(index)">
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
  }
})
</script>

<style scoped>

</style>
