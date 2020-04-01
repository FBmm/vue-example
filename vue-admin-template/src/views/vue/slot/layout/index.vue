<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot v-bind:props="user"></slot>
    </div>
    <div>
      <slot name="footer" v-bind:props="childName"></slot>
    </div>
    <div>
      <p slot="attr"></p>
    </div>
    <div>
      <slot v-bind:props="test"></slot>
    </div>
    <div>
      <slot name="user" v-bind:props="user"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      childName: 'child layout',
      test: '测试',
      user: {
        name: '五千',
        id: '10000'
      }
    };
  }
};
</script>