<template>
  <div class="left-nav">
    <ul>
      <li>
        <router-link to="/MainView/friendList">Friend List</router-link>
      </li>
      <li>
        <router-link to="/MainView/chatList">Chat List</router-link>
      </li>
    </ul>
  </div>
</template>

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

a {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-decoration: none;
  border: 0;
}

a:hover,
a.active {
  background-color: #555;
  color: white;
}
</style>
