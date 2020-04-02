<template>
  <div>
    <ul>
      <li
        v-for="peo in peoples"
        v-bind:key="peo.id"
      >
        <!--
        我们为每个 todo 准备了一个插槽，
        将 `todo` 对象作为一个插槽的 prop 传入。
        -->
        <slot name="people" v-bind:peo="peo">
          <!-- 后备内容 -->
          {{ peo.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      peoples: [{
        id: 1,
        name: 'tom',
        sex: 0,
      }, {
        id: 2,
        name: 'bob',
        sex: 0,
      }, {
        id: 3,
        name: 'jene',
        sex: 1,
      }]
    };
  }
};
</script>