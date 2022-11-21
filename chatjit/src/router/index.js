import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import friendList from "../views/friendList.vue";
import chatList from "../views/chatList.vue";

const routes = [
  {
    path: "",
    name: "Login",
    component: Login,
  },
  {
    path: "/friendList",
    name: "friendList",
    component: friendList,
  },
  {
    path: "/chatList",
    name: "chatList",
    component: chatList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
