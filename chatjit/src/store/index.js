import { createStore } from "vuex";

import chatList from "./modules/chatList.js";
import messages from "./modules/messages.js";

export default createStore({
  modules: {
    chatList: chatList,
    messages: messages,
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
