<template>
  <div class="search-input">
    <input type="text" :class="{ focus: isFocus }" placeholder="搜索" @focus="onFocus" @blur="onBlur"/>
    <i class="icon-wrap" :class="{ iconFocus: isFocus }"><svg-icon class-name="search-icon" icon-class="search"></svg-icon></i>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    placehorder: String
  },
  data: function () {
    return {
        isFocus: false,
    }
  },
  methods: {
    onFocus () {
        this.isFocus = true;
    },
    onBlur () {
        this.isFocus = false;
    }
}
}
</script>

<style lang="less" scoped>
.search-input{
  position: relative;
  input{
    padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width 0.5s;
    -moz-transition: width 0.5s;
    -webkit-transition: width 0.5s;
    -o-transition: width 0.5s;
    transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -webkit-transition-delay: 0.1s;
    outline: none;
  }
  .icon-wrap {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -14px;
    color: #969696;
    padding: 5px;
    cursor: pointer;
  }
  .focus {
    width: 320px;
  }
  .iconFocus {
      background-color: #969696;
      border-radius: 50%;
      color: #fff!important;
  }
} 
</style>

