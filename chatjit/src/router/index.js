import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import friendList from "../views/friendList.vue";
import chatList from "../views/chatList.vue";

import MainView from "../views/MainView.vue";

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
    // =========== 테스트 =============
    {
        path: "/MainView",
        name: "MainView",
        component: MainView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
