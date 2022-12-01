<template>
  <base-chat-list v-for="(chatList, index) in chatLists" :key="chatList" :index="index">
    <template v-slot:profilePic> {{ chatList.profilePic }} </template>
    <template v-slot:withWho> {{ chatList.withWho }} </template>
    <template v-slot:text> {{ chatList.text }} </template>
  </base-chat-list>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("chatList", ["chatLists"]),
  },
};
</script>
