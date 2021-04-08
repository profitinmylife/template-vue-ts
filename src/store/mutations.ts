import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void
  [MutationTypes.SAVE_COUNTER](state: S, payload: number): void
  [MutationTypes.ADD_ARR](state: S, payload: number): void
  [MutationTypes.RESET_COUNTER](state: S, payload: number): void
  [MutationTypes.GET_API](state: S, testApi: object ): void
  [MutationTypes.POST_API](state: S, postApi: object ): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload
  },
  [MutationTypes.SAVE_COUNTER](state, payload: number){
    state.saveCounter = payload
  },
  [MutationTypes.ADD_ARR](state, payload: number){
    state.arr.push(payload)
  },
  [MutationTypes.RESET_COUNTER](state, payload: number){
    state.counter = payload
  },
  [MutationTypes.GET_API](state, testApi: object){
    state.testApi.push(testApi)
  },
  [MutationTypes.POST_API](state, postApi: object){
    state.postApi = postApi
  }
}
