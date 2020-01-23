<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="简书" />
      </div>
      <div class="nav-wrap">
        <div class="nav">
          <div class="nav-item active">
            <a href>首页</a>
          </div>
          <div class="nav-item">
            <a href>下载App</a>
          </div>
          <Search placeholder="搜索"></Search>  
        </div>
      </div>
      <div class="btn-wrap">
        <a class="login" href="#/login">登陆</a>
        <button class="btn">注册</button>
        <button class="btn btn-primary">写文章</button>
      </div>
    </div>
  </header>
</template>
<script>
import Search from "../common/search";
export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Search
  }
};
</script>

<style scoped>
.search-icon {
  cursor: pointer;
  font-size: 18px;
  vertical-align: middle;
}
.app-header {
  width: 100%;
  position: fixed;
  height: 58px;
  border: solid #e7e7e7;
  border-width: 0 0 1px;
  background: #fff;
  top: 0;
  z-index: 100000;
}
.container {
  position: relative;
  padding-left: 100px;
}
.logo {
  position: absolute;
  left: 0;
  height: 56px;
}
.logo img {
  height: 100%;
}
.nav {
  height: inherit;
  display: flex;
  align-items: center;
}
.nav .nav-item {
  padding: 15px;
  line-height: 28px;
}

.nav .nav-item a {
  font-size: 17px;
}
.active a {
  color: #ea6f5a;
}

.btn-wrap {
  position: absolute;
  top: 0;
  right: 0;
}
.search-input {
  margin-left: 15px;
}
.login {
    color: #969696;
    margin-right: 20px;
    font-size: 15px;
}
</style>

