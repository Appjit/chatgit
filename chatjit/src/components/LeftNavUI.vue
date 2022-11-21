<template>
  <div class="left-nav">
    <ul>
      <li>
        <a><router-link to="/friendList">friendList</router-link></a>
      </li>
      <li>
        <a><router-link to="/chatList">chatList</router-link></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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

a {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-decoration: none;
}

li a {
  width: 100%;
}

li a:hover {
  background-color: #555;
  color: white;
}
</style>
