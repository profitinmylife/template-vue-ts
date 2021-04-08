import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import axios from "axios";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>
  [ActionTypes.SAVE_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ActionTypes.RESET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ActionTypes.ADD_ARR_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ActionTypes.GETING_API](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ActionTypes.POSTED_API](
    { commit }: AugmentedActionContext,
    postedApiL: object
  ): void
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUNTER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256
        commit(MutationTypes.SET_COUNTER, data)
        resolve(data)
      }, 500)
    })
  },
  [ActionTypes.SAVE_COUNTER]({ commit }, payload: number) {
    return commit(MutationTypes.SAVE_COUNTER, payload)
  },
  [ActionTypes.RESET_COUNTER]({ commit }, payload: number) {
    return commit(MutationTypes.RESET_COUNTER, payload)
  },
  [ActionTypes.ADD_ARR_COUNTER]({ commit }, payload: number) {
    return commit(MutationTypes.ADD_ARR, payload)
  },
  [ActionTypes.GETING_API]({ commit }) {
    axios
      .get('https://reqres.in/api/users')
      .then(response => response.data)
      .then(items => {
        console.log(items);
        commit(MutationTypes.GET_API, items);
      })
  },
  [ActionTypes.POSTED_API]({ commit }, postedApi: object){
    axios
      .post('https://reqres.in/api/users', postedApi)
  }
}
