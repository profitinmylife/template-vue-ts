import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  doubledCounter(state: State): number
  savedCounter(state: State): number
  addedArray(state: State): any
}

export const getters: GetterTree<State, State> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2
  },
  savedCounter: (state) => {
    return state.saveCounter
  },
  addedArray: (state) => {
    return state.arr.push(state.counter)
  }
}
