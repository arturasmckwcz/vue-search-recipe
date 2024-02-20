import { createStore } from "vuex";
import { Store } from "vuex/types/index.js";

import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import getters from "./getters";
import { State } from "./types";

const store: Store<State> = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
