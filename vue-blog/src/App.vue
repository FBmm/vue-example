<template>
  <div id="app">
    <Header v-if="!isLogin" />
    <router-view class="router"></router-view>
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  name: "app",
  data: {
    isLogin: false,
  },
  components: {
    Header
  },
  created: function() {
      this.isLogin = this.$route.path === '/login';
  },
  watch: {
    $route: function (to, from) {
      this.isLogin = to.path === '/login';
    }
  }
};
</script>

<style>
html,
body,
p {
  padding: 0;
  margin: 0;
  height: 100%;
  color: #333;
}
* {
  box-sizing: border-box;
  outline: none;
  text-align: left;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

a {
  color: #333;
  text-decoration: none;
}

button {
  cursor: pointer;
  text-align: center;
  outline: none;
  border: none;
}

.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

.container {
  min-width: 768px;
  max-width: 960px;
  margin: 0 auto;
}

.btn {
  width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.btn:hover {
  color: #ec6149;
  border-color: #ec6149;
  background-color: rgba(236, 97, 73, 0.05);
}
.btn-primary {
  background-color: #ea6f5a;
  color: #fff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #ec6149;
}

.mr10 {
    margin-right: 10px;
}

.router {
  padding-top: 58px!important;
}
</style>
