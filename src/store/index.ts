import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  count: number;
  active: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    active: true
  },
  mutations: {

  },
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
