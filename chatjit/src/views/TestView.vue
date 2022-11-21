<template>
  <div>
    <LeftNavUI></LeftNavUI>
    <TitleBarUI></TitleBarUI>
    <ChatListUI></ChatListUI>
  </div>
</template>

<script>
import LeftNavUI from "../components/LeftNavUI.vue";
import TitleBarUI from "../components/TitleBarUI.vue";
import ChatListUI from "../components/ChatListUI.vue";

export default {
  components: {
    LeftNavUI,
    TitleBarUI,
    ChatListUI,
  },
};
</script>

<style scoped>
div {
  height: 100%;
}
</style>
