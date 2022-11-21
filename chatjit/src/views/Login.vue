<template>
	<div class="container">
    <div id="image">
      <img src="@/assets/chatjit_Logo.png" class="rounded mx-auto d-block" />           
    </div>
		<form>
  <div class="row mb-3">
    <label for="inputID" class="col-sm-2 col-form-label">ID</label>
    <div class="col-sm-10">
      <input type="id" class="form-control" id="inputID">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPW" class="col-sm-2 col-form-label">PW</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPW">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">로그인</button>
</form>
  </div>
  <router-link to="/friendList">friendList</router-link> |
  <router-link to="/chatList">chatList</router-link>
</template>
<script>
export default {
    
}
</script>