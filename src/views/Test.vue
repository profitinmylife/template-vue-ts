<template>
  <section>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset counter</button>
    <button type="button" @click="saveCounter">Save counter</button>
    <p>Saved counter: {{ savedCounter }}</p>
    <button type="button" @click="addInArray">Add Arr</button>
    <p>Array : {{ addedItem }}</p>
  </section>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { MutationTypes } from "@/store/mutation-types";
import { ActionTypes } from "@/store/action-types";

export default defineComponent ({
  name: "Test",
  computed: {
    counter: {
      get() {
        return this.$store.state.counter
      },
      set(value: number) {
        this.$store.commit(MutationTypes.SET_COUNTER, value)
      }
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter
    },
    savedCounter() {
      return this.$store.getters.savedCounter
    },
    // addedItem() {
    //   return this.$store.getters.addedArray
    // }
    addedItem() {
      return this.$store.state.arr.length
    }
  },
  methods: {
    resetCounter() {
      this.$store.commit(MutationTypes.SET_COUNTER, 0)
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUTNER, 256)
    },
    saveCounter() {
      this.$store.commit(MutationTypes.SAVE_COUNTER, this.counter)
    },
    addInArray() {
      this.$store.commit(MutationTypes.ADD_ARR, this.counter)
      console.log(this.$store.state.arr);
    }
  },
});
</script>

<style scoped>
section{
  padding-top: 100px;
}
</style>
