import { createStore, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { Store } from "vuex/types/index.js";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { Getters, State } from "./types";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State, Getters>({
  state,
  actions,
  mutations,
  getters,
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}

export default store;
