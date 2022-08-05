<template>
  <div class='home-view-wrapper'>
    <div class="view-text">
      <span>记录来乾的运动生活</span>
      <p>comeMoney</p>
    </div>
    <div class="login-button">
      <van-button
      @click="jumpLogin"
        type="primary"
        size="large"
        round
        color="rgb(5, 191, 171)"
      >登录</van-button>
      <van-button
        size="large"
        round
        color="rgb(238, 139, 82)"
        style="margin-top: 12px;"
      >注册</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    jumpLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  },
}
</script>
<style lang='less' scoped>
.home-view-wrapper {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  .login-button {
    width: 90%;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .view-text {
    margin-top: 14%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    span {
      font-family: Helvetica;
      font-size: 35px;
      font-weight: 400;
      line-height: 57px;
    }
    p {
      font-family: Helvetica;
      margin-top: 12px;
      font-size: 40px;
      font-weight: 400;
      line-height: 57px;
    }
  }
}
</style>
