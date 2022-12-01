import { createStore } from "vuex";

import chatList from "./modules/chatList.js";

export default createStore({
  modules: {
    chatList: chatList,
  },
  state: {
    showingList: "friendList",
  },
  getters: {
    showingList(state) {
      return state.showingList;
    },
  },
  mutations: {},
  actions: {},
});
