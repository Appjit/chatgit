<template>
  <div class="chat-title">
    <div class="chat-name">
      <div class="profile-picture">
        <slot name="profilePic"></slot>
      </div>
      <slot name="chat-name"></slot>
    </div>
    <div class="button-container">
      <button>검색</button>
      <button>메뉴</button>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 50px;
  padding: 0;
  border: none;
}

.chat-title {
  display: flex;
  align-content: center;
  justify-content: space-between;
  min-height: 50px;
  margin-left: 10px;
}

.chat-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile-picture {
  margin-right: 10px;
  min-width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: red;
}

.button-container {
  min-width: 100px;
  display: flex;
  align-content: center;
  background-color: blue;
}
</style>
