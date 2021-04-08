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
      <div class="">{{ id }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MutationTypes } from "@/store/mutation-types";
import { ActionTypes } from "@/store/action-types";

export default defineComponent ({
  name: "Test",
  data() {
    return {
      userId: 123,
      id: 10,
      title: "123123123"
    }
  },
  computed: {
    counter: {
      get() {
        return this.$store.state.counter;
      },
      set(value: number) {
        this.$store.commit(MutationTypes.SET_COUNTER, value);
      }
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
    savedCounter() {
      return this.$store.getters.savedCounter;
    },
    addedItem() {
      return this.$store.state.arr.length;
    }
  },
  methods: {
    resetCounter() {
      this.$store.dispatch(ActionTypes.RESET_COUNTER, 0);
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUNTER, 256);
    },
    saveCounter() {
      this.$store.dispatch(ActionTypes.SAVE_COUNTER, this.counter);
    },
    addInArray() {
      this.$store.dispatch(ActionTypes.ADD_ARR_COUNTER, this.counter);
      console.log(this.$store.state.arr);
      console.log(this.$store.state.testApi);
    }
  },
  mounted() {
    let post = {
      id: 1,
      email: '12312312',
      first_name: '12312312',
      last_name: '12312312'
    }
    this.$store.dispatch(ActionTypes.POSTED_API, post)
    this.$store.dispatch(ActionTypes.GETING_API, 0);
  }
});
</script>

<style scoped>
section{
  padding-top: 100px;
}
</style>
