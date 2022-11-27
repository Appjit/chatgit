<template>
    <div class="TitleBarUI">
        <div class="button-container">
            <button @click="newChat">새챗</button>
            <button>검색</button>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["new-chat"],
    methods: {
        newChat() {
            this.$emit("new-chat");
        },
    },
};
</script>

<style scoped>
div.TitleBarUI {
    display: block;
    background-color: cadetblue;
    text-align: right;
    position: fixed;
    left: 25%;
    top: 0;
    height: 6%;
    width: 75%;
}

button {
    height: 100%;
    width: 60px;
    margin: 0 1%;
    border: 0;
    padding: 0;
}

.button-container {
    height: 100%;
    margin-right: 5%;
}
</style>
