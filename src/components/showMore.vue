<template>
  <div
    class="more-wrapper"
    @click="toDetail"
  >
    <span>查看更多</span>
    <i class="iconfont icon-qianjin"></i>
  </div>
</template>
<script>
export default {
  name: 'DefaultName',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    toDetail() {
      this.$emit('toDetail')
    },
  },
}
</script>
<style lang='less' scoped>
.more-wrapper {
  display: flex;
  align-items: center;
  span {
    margin-right: 2px;
  }
}
</style>
