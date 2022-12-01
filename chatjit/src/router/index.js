import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

import MainView from "../views/MainView.vue";
import FriendList from "../components/layout/FriendList.vue";
import ChatList from "../components/layout/ChatList.vue";

import ChatView from "../views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    // =========== 메인 =============
    {
      path: "/MainView",
      redirect: "/MainView/friendList",
      name: "MainView",
      component: MainView,
      children: [
        {
          path: "friendList",
          name: "friend-list",
          component: FriendList,
        },
        {
          path: "chatList",
          name: "chat-list",
          component: ChatList,
        },
      ],
    },
    // ========== 채팅창 ============
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
    },
  ],
  linkActiveClass: "active",
});

export default router;
