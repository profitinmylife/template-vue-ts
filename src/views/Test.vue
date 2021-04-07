<template>
  <section>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset counter</button>
    <button type="button" @click="saveCounter">Save counter</button>
    <p>Saved counter: {{ savedCounter }}</p>
    <button type="button" @click="addInArray">Add Arr</button>
    <p>Array : {{ addedItem }}</p>
    <div class="axios">
      {{info}}
    </div>
  </section>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { MutationTypes } from "@/store/mutation-types";
import { ActionTypes } from "@/store/action-types";
import axios from "axios";

export default defineComponent ({
  name: "Test",
  data() {
    return {
      info: null
    }
  },
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
      this.$store.commit(MutationTypes.RESET_COUNTER, 0)
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUNTER, 256)
    },
    saveCounter() {
      this.$store.commit(MutationTypes.SAVE_COUNTER, this.counter)
    },
    addInArray() {
      this.$store.commit(MutationTypes.ADD_ARR, this.counter)
      console.log(this.$store.state.arr);
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.time.updateduk));
  }
});
</script>

<style scoped>
section{
  padding-top: 100px;
}
</style>
