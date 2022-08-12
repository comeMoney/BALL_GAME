<template>
  <div class='header-wrapper'>
    <div class="avator">
      <img
        src="../assets/avator/icon.jpg"
        alt=""
        srcset=""
      >
      <div class="title-name">
        <span>laiqianqian</span>
        <p>运动健将</p>
      </div>
    </div>
    <div class="setting">
      <i class="iconfont icon-shezhi"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang='less' scoped>
.header-wrapper {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .avator {
    display: flex;
    align-items: center;
    img {
      width: 65px;
      height: 65px;
      margin-right: 15px;
      border-radius: 50%;
    }
    .title-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      span {
        color: rgb(27, 27, 29);
        font-family: HappyZcool-2016;
        font-size: 24px;
        font-weight: 400;
        line-height: 26px;
      }
      p {
        color: rgb(70, 70, 73);
        margin-top: 4px;
        font-family: HappyZcool-2016;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
  .setting {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    .iconfont {
      font-size: 30px;
    }
  }
}
</style>
