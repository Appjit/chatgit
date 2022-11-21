<template>
  <div class="chat-container">
    <div class="chat-list" v-for="(chatList, index) in chatLists" :key="chatList">
      {{ chatList }}, {{ index }} <button @click="DeleteList(index)">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatLists: ["1번 채팅", "2번 채팅"],
    };
  },
  methods: {
    DeleteList(index) {
      this.chatLists.splice(index, 1);
    },
  },
};
</script>

<style scoped>
div.chat-container {
  position: fixed;
  top: 6%;
  left: 25%;
  height: 94%;
  width: 75%;
  overflow: auto;
}

div.chat-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
}
</style>
