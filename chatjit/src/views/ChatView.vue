<template>
  <div class="chat-background"></div>
  <div class="container">
    <base-chat-title>
      <template v-slot:profilePic>그림</template>
      <template v-slot:chat-name>이름이 엄청 길어지면 잘되나</template>
    </base-chat-title>
    <div class="chat-container" ref="messages">
      <base-chat-box v-for="(chat, index) in chats" :key="index" :byWho="chat.byWho">{{ chat.chatText }}</base-chat-box>
    </div>
    <div class="chat-input">
      <textarea v-model="newChat" @keyup.enter="sendMessage" placeholder="입력"></textarea>
      <button @click="sendMessage">전송</button>
    </div>
  </div>
</template>

<script>
// 스크롤 맨 밑으로 내리는 함수
const scrollToBottom = (messages) => {
  messages.scrollTop = messages.scrollHeight;
};

// 테스트용
export default {
  data() {
    return {
      chats: [
        {
          byWho: "you",
          chatText: "니가 보낸 메세지",
        },
      ],
      newChat: "",
    };
  },
  methods: {
    sendMessage() {
      this.chats.push({ byWho: "me", chatText: this.newChat });
      this.newChat = "";
    },
  },
  // 스크롤 밑으로 내리기
  mounted() {
    scrollToBottom(this.$refs.messages);
  },
  updated() {
    scrollToBottom(this.$refs.messages);
  },
};
</script>

<style scoped>
button {
  padding: 0;
  border: none;
  width: 10%;
}

textarea {
  padding: 1%;
  width: 90%;
  height: 100%;
  border: none;
  resize: none;
}

.chat-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(186, 206, 224);
}

.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: none;
  padding: 0;
  width: 100%;
  height: 100%;
}

.chat-container {
  height: inherit;
  overflow: auto;
}

.chat-input {
  min-height: 150px;
  background-color: white;
  display: flex;
  align-content: center;
}
</style>
