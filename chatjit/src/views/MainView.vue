<template>
    <div>
        <LeftNavUI @change-list="changeList"></LeftNavUI>
        <TitleBarUI @new-chat="changeModalState"></TitleBarUI>
        <FriendListUI v-if="showingList === 'friendList'"></FriendListUI>
        <ChatListUI v-if="showingList === 'chatList'" :chatLists="chatLists" @delete-list="deleteList"></ChatListUI>
        <ModalNewChat v-if="isOpenNewChatModal" @close-modal="changeModalState" @add-chat="addChat"></ModalNewChat>
    </div>
</template>

<script>
import LeftNavUI from "../components/layout/LeftNavUI.vue";
import TitleBarUI from "../components/layout/TitleBarUI.vue";
import ChatListUI from "../components/layout/ChatListUI.vue";
import FriendListUI from "../components/layout/FriendListUI.vue";
import ModalNewChat from "../components/modal/ModalNewChat.vue";

export default {
    components: {
        LeftNavUI,
        TitleBarUI,
        ChatListUI,
        FriendListUI,
        ModalNewChat,
    },
    data() {
        return {
            showingList: "friendList",
            isOpenNewChatModal: false,
            // 더미 데이터
            chatLists: [
                {
                    profilePic: "그림",
                    withWho: "김성배",
                    text: "1번 채팅",
                },
                {
                    profilePic: "그림",
                    withWho: "최준영",
                    text: "2번 채팅",
                },
            ],
        };
    },
    methods: {
        deleteList(index) {
            this.chatLists.splice(index, 1);
        },
        changeList(activeList) {
            this.showingList = activeList;
        },
        changeModalState() {
            this.isOpenNewChatModal = !this.isOpenNewChatModal;
        },
        addChat(who, chat) {
            // 서버에 새 채팅 추가 후 데이터에도 반영
            // 더미 추가
            this.chatLists.push({
                profilePic: "그림",
                withWho: who,
                text: chat,
            });
            this.changeModalState();
        },
    },
    beforeMount() {
        // 서버에서 채팅 목록 불러와서 chatLists에 추가
        // 더미 추가
        this.chatLists.push({
            profilePic: "그림",
            withWho: "이현택",
            text: "3번 채팅",
        });
    },
};
</script>

<style scoped>
div {
    height: 100%;
}
.testBt {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>
