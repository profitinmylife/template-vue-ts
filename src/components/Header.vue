<template>
  <div class="header">
    <div class="h-container">
      <div class="h-logo">
        <img :src="require(`./../assets/img/logo.svg`)" alt="Логотип">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import './../assets/css/style.scss'
export default defineComponent({
  name: "Header",
  props: {

  }
});
</script>

<style lang="scss" scoped>
$background: #ffff;

.header{
  width: 100%;
  height: 80px;
  padding: 0;
  position: fixed;
  background: rgba(255, 255, 255, 0.15);
  z-index: 10;
}
.h-container{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
}
.h-logo{
  width: 90px;
}
.h-logo img{
  width: 100%;
}
</style>
