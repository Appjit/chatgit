<template>
    <div class="list-container">
        <div class="profile-picture">
            <slot name="profilePic"></slot>
        </div>
        <div class="with-who">
            <slot name="withWho"></slot>
        </div>
        <div class="text">
            <slot name="text"></slot>
        </div>
        <button @click="deleteList">삭제</button>
    </div>
</template>

<script>
export default {
    emits: ["delete-list"],
    methods: {
        deleteList() {
            this.$emit("delete-list");
        },
    },
};
</script>

<style scoped>
* {
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-container {
    width: 100%;
    height: 80%;
    background-color: palevioletred;
}

.profile-picture {
    width: 10%;
    height: 100%;
    background-color: red;
}

.with-who {
    width: 20%;
}

.text {
    width: 60%;
}
</style>
