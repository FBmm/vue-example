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
    <template v-for="(item) in menus" :index="item.name">
      <el-menu-item
        v-if="!item.hidden && !item.children"
        :key="item.name"
        :index="item.name"
        :disabled="item.disabled"
      >
        <router-link :to="item.route">{{item.title}}</router-link>
      </el-menu-item>
      <el-submenu
        v-if="!item.hidden && item.children"
        :key="item.name"
        :index="item.name"
        :disabled="item.disabled"
      >
        <template slot="title">
          <router-link :to="item.route">{{item.title}}</router-link>
        </template>
        <template v-for="(subItem) in item.children">
          <router-link v-if="!subItem.hidden" :to="subItem.route" :key="subItem.name">
            <el-menu-item :index="subItem.name" :disabled="subItem.disabled">{{subItem.title}}</el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import menus from "@/config/menu";
export default {
  name: "MainMenu",
  data() {
    return {
      activeIndex: "home",
    };
  },
  computed: {
    menus() {
      return menus;
    }
  },
  mounted() {
    console.log(this.menus);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>