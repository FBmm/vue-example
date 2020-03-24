<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  > 
    <template v-for="(item) in menuConfig" :index="item.name">
      <el-submenu v-if="!item.hidden && item.children" :key="item.name" :index="item.name" :disabled="item.disabled">
        <template slot="title">{{item.title}}</template>
        <template v-for="(subItem) in item.children">
          <el-menu-item v-if="!subItem.hidden" :key="subItem.name" :index="subItem.name" :disabled="subItem.disabled">{{subItem.title}}</el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-if="!item.hidden && !item.children" :key="item.name" :index="item.name" :disabled="item.disabled">
        {{item.title}}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { menuConfig } from '@/config/menu';
export default {
  name: 'MainMenu',
  data() {
    return {
      activeIndex: "home",
      menuConfig: menuConfig,
    };
  },
  mounted() {
    console.log(menuConfig)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>