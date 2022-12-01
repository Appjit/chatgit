<template>
  <div class="list-container" @dblclick="openChat">
    <div class="profile-picture">
      <slot name="profilePic"></slot>
    </div>
    <div class="with-who">
      <slot name="withWho"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
    <button @click="removeChat(index)">삭제</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    index: Number,
  },
  methods: {
    ...mapActions("chatList", ["removeChat"]),
    openChat() {
      this.$router.push({ name: "chat" });
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-container {
  margin: 1% 0;
  width: 100%;
  height: 10%;
  background-color: palevioletred;
}
.list-container:hover {
  background-color: rgb(214, 147, 170);
}

.profile-picture {
  width: 10%;
  height: 100%;
  background-color: red;
}

.with-who {
  width: 20%;
}

.text {
  width: 60%;
}
</style>
