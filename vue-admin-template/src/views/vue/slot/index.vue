<template>
  <div class="app-container">
    <h1>插槽 - slot</h1>
    <h3>1. 从父组件向子组件插入内容</h3>
    <child>
      这是插入的内容 {{name}}
    </child>
    <h1></h1>
    <h3>2. 从父组件向子组件插入组件</h3>
    <child ref='child'>
      <child2 />
      <a href="//www.baidu.com">baidu</a>
    </child>
    <h1></h1>
    <h3>3. 具名插槽</h3>
    <layout>
      <template v-slot:header>这是标题</template>
      <!-- <template v-slot:default>这是内容</template> -->
      这是内容1（优先级没有 template v-slot:default 高 同时存在会被覆盖）
      <template v-slot:footer>这是底部</template>
      <template v-slot:footer>这是底部1 （会覆盖前面的 v-slot:footer）</template>
      <!-- 带有 slot attribute 的具名插槽 自 2.6.0 起被废弃 -->
      <template slot="attr">slot attribute</template>
    </layout>
    <h1></h1>
    <h3>4. 作用域插槽</h3>
    <layout>
      <template v-slot:footer="slotProps" >{{slotProps.props}}</template>
    </layout>
  </div>
</template>

<script>
import child from './child-component/index'
import child2 from './child2/index'
import layout from './layout/index'
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      name: 'parent'
    }
  },
  components: {child, child2, layout},
  mounted() {
    console.log(this.$refs.child)
  },
  methods: {
  }
}
</script>
