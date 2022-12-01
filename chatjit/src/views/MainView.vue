<template>
  <left-nav></left-nav>
  <title-bar></title-bar>
  <div class="container">
    <router-view></router-view>
  </div>
  <modal-new-chat v-if="isOpenNewChatModal"></modal-new-chat>
</template>

<script>
import LeftNav from "../components/layout/LeftNav.vue";
import TitleBar from "../components/layout/TitleBar.vue";
import ModalNewChat from "../components/modal/ModalNewChat.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    LeftNav,
    TitleBar,
    ModalNewChat,
  },
  computed: {
    ...mapGetters("chatList", ["isOpenNewChatModal"]),
  },
};
</script>

<style scoped>
div.container {
  display: block;
  position: fixed;
  left: 25%;
  top: 6%;
  height: 100%;
  width: 75%;
  max-width: none;
  padding: 0;
}
</style>
