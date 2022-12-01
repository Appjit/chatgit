export default {
  namespaced: true,
  state: {
    isOpenNewChatModal: false,
    // 더미 데이터
    chatLists: [
      {
        profilePic: "그림",
        withWho: "김성배",
        text: "1번 채팅",
      },
      {
        profilePic: "그림",
        withWho: "최준영",
        text: "2번 채팅",
      },
    ],
  },
  getters: {
    isOpenNewChatModal(state) {
      return state.isOpenNewChatModal;
    },
    chatLists(state) {
      return state.chatLists;
    },
  },
  mutations: {
    changeModalState(state) {
      state.isOpenNewChatModal = !state.isOpenNewChatModal;
    },
    addChat(state, payload) {
      const newChat = payload;
      state.chatLists.unshift(newChat);
    },
    removeChat(state, payload) {
      state.chatLists.splice(payload, 1);
    },
  },
  actions: {
    changeModalState(context) {
      context.commit("changeModalState");
    },
    addChat(context, payload) {
      context.commit("addChat", payload);
      context.commit("changeModalState");
    },
    removeChat(context, payload) {
      context.commit("removeChat", payload);
    },
  },
};
