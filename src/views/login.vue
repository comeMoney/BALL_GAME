
<template>
  <div class='login-wrapper'>
    <back @back="back" />
    <div class="login-header">

    </div>
  </div>
</template>
<script>
import back from '../components/Back.vue'
export default {
  name: 'login',
  components: {
    back,
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang='less' scoped>
.login-wrapper {
  padding: 15px;
  .login-header {
    padding: 12px;
    border-radius: 10px;
    background: #fff;
  }
}
</style>

