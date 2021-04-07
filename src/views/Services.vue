<template>
  <SliderCheck :slides="slides" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SliderCheck from "@/components/slider.vue";

export default defineComponent({
  name: "Services",
  components: {
    SliderCheck,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "123123",
          info: "123123213",
          image: "0.svg"
        },
        {
          id: 2,
          title: "123123",
          info: "123123213",
          image: "1.svg"
        },
        {
          id: 3,
          title: "123123",
          info: "123123213",
          image: "2.svg"
        },
        {
          id: 4,
          title: "123123213",
          info: "123123213",
          image: "3.svg"
        },
      ],
    };
  },
});
</script>

<style scoped></style>
