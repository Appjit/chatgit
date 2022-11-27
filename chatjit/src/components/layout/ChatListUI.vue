<template>
    <div class="chat-container">
        <div class="chat-list" v-for="(chatList, index) in chatLists" :key="chatList">
            <BaseChatList @delete-list="deleteList(index)">
                <template v-slot:profilePic> {{ chatList.profilePic }} </template>
                <template v-slot:withWho> {{ chatList.withWho }} </template>
                <template v-slot:text> {{ chatList.text }} </template>
            </BaseChatList>
        </div>
    </div>
</template>

<script>
import BaseChatList from "../UI/BaseChatList.vue";

export default {
    emits: ["delete-list"],
    components: {
        BaseChatList,
    },
    props: {
        chatLists: Array,
    },
    methods: {
        deleteList(index) {
            this.$emit("delete-list", index);
        },
    },
    beforeUpdate() {
        console.log("추가 또는 삭제함");
        // 채팅 목록 추가 또는 삭제 시 이벤트 일으켜 MainView.vue에 전달하고 서버에 반영
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
