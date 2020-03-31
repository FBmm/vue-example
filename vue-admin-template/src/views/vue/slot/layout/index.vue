<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      childName: 'child layout',
      test: '测试'
    };
  }
};
</script>