<template>
  <div class="container home clearfix">
    <div class="banner-container">
      <Banner class="banner"></Banner>
      <List></List>
      <div>
        <button class="read-more-btn">阅读更多</button>
      </div>
    </div>
    <div class="aside">
      <Aside></Aside>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner";
import Aside from "@/components/aside";
import List from "@/components/list";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Banner,
    Aside,
    List
  }
};
</script>

<style lang="less" scoped>
.home {
  margin-top: 30px;
}
.container {
  .banner-container {
    width: 66.66667%;
    float: left;
    .banner {
      margin-bottom: 35px;
    }
  }

  .aside {
    width: 29.16667%;
    margin-left: 4.16667%;
    float: left;
  }
  .read-more-btn {
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    display: block;
    color: #fff;
    border: none;
    &:hover {
      background-color: #9b9b9b;
    }
  }
}
</style>
