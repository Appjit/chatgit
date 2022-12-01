import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

import BaseChatList from "./components/UI/BaseChatList.vue";
import BaseChatTitle from "./components/UI/BaseChatTitle.vue";
import BaseChatBox from "./components/UI/BaseChatBox.vue";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.component("base-chat-list", BaseChatList);
app.component("base-chat-title", BaseChatTitle);
app.component("base-chat-box", BaseChatBox);

app.use(store);
app.use(router);
app.mount("#app");
