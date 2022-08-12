<template>
  <div class='card-wrapper'>
    <div class="title">
      <div
        v-if="title"
        class="title-span"
      >
        <p :style="{'background': color}"></p>
        {{title}}
      </div>
      <div class="button">
        <slot name='button'></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    // title的color
    color: {
      type: String,
      default: 'rgb(5, 191, 171)',
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang='less' scoped>
.card-wrapper {
  width: 95%;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    .title-span {
      display: flex;
      color: rgb(27, 27, 29);
      font-family: Gill Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      align-items: center;
      p {
        display: block;
        width: 4px;
        height: 20px;
        border-radius: 1px;
        margin: 0 8px 0 0;
      }
    }
    .button {
      display: flex;
    }
  }
}
</style>
