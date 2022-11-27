<template>
    <div class="left-nav">
        <ul>
            <li>
                <button :class="{ activate: activeList === 'friendList' }" @click="changeList('friendList')">
                    friendList
                </button>
            </li>
            <li>
                <button :class="{ activate: activeList === 'chatList' }" @click="changeList('chatList')">
                    chatList
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    emits: ["change-list"],
    data() {
        return {
            activeList: "friendList",
        };
    },
    methods: {
        changeList(list) {
            this.activeList = list;
            this.$emit("change-list", list);
        },
    },
};
</script>

<style scoped>
div.left-nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 25%;
    height: 100%;
    display: block;
    margin: 0;
    background-color: #f1f1f1;
}

ul {
    list-style-type: none;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}

li {
    height: 6%;
}

button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-decoration: none;
    border: 0;
}

button:hover {
    background-color: #555;
    color: white;
}

button.activate {
    background-color: #555;
    color: white;
}
</style>
