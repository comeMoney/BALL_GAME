<template>
  <div
    class="back"
    @click="handleBack"
  >
    <i class="iconfont icon-houtui"></i>
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
    handleBack() {
      this.$emit('back')
    },
  },
}
</script>
<style lang='less' scoped>
.back {
  position: fixed;
  top: 12px;
  left: 12px;
  width: 45px;
  height: 45px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
