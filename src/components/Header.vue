<template>
  <div class="header">
    <div class="h-container">
      <div class="h-logo">
        <img src="./../assets/img/logo.svg" alt="Логотип">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Header",
  props: {

  }
});
</script>

<style lang="scss" scoped>
$background: #ffff;

.header{
  width: 100vw;
  height: 10vh;
  padding: 0;
  background-color: $background;
}
.h-container{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.h-logo{
  width: 90px;
}
.h-logo img{
  width: 100%;
}
</style>