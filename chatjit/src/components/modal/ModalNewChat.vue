<template>
    <div class="back-ground" @click="closeModal"></div>
    <div class="container-box">
        <h2>새로운 채팅</h2>
        <div class="form-container">
            <label>누구랑? :</label>
            <input type="text" v-model="who" />
        </div>
        <div class="form-container">
            <label>보낼 채팅 :</label>
            <input type="text" v-model="chat" />
        </div>
        <div class="form-container">
            <button @click="addChat">추가</button>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["close-modal", "add-chat"],
    data() {
        return {
            who: "",
            chat: "",
        };
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
        addChat() {
            this.$emit("add-chat", this.who, this.chat);
        },
    },
};
</script>

<style scoped>
.back-ground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.container-box {
    position: fixed;
    top: 30%;
    left: 25%;
    width: 50%;
    height: 40%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-container {
    width: 100%;
    text-align: center;
}

.close-button {
    position: absolute;
    top: 35%;
    left: 75%;
    transform: translateX(-30px);
    border: 0;
    width: 30px;
    height: 30px;
}
</style>
