export default {
  namespaced: true,
  state: {
    chats: [
      {
        byWho: "you",
        chatText: "니가 보낸 메세지",
      },
    ],
  },
  getters: {
    chats(state) {
      return state.chats;
    },
  },
  mutations: {
    sendMessage(state, payload) {
      state.chats.push({ byWho: "me", chatText: payload.trim() });
    },
  },
  actions: {
    sendMessage(context, payload) {
      context.commit("sendMessage", payload);
    },
  },
};
