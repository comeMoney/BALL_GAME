<template>
  <card :title="'年度汇总'">
    <show-more slot="button"></show-more>
    <div class="total-year">
      <span class="total-year-time">
        年度总用时: 24:25:46
      </span>
      <div class="top-three">
        <img
          src="../assets/ranking/gradeRank1.png"
          alt=""
          class="rank-imag-1"
        >
        <img
          src="../assets/ranking/gradeRank2.png"
          alt=""
          class="rank-imag-2"
        >
        <img
          src="../assets/ranking/gradeRank3.png"
          alt=""
          class="rank-imag-3"
        >
        <div class="rank-content rank-content-1">
          <span>2022/8</span>
          <p>用时: 25:40:46</p>
        </div>
        <div class="rank-content rank-content-2">
          <span>2022/5</span>
          <p>用时: 25:40:46</p>
        </div>
        <div class="rank-content rank-content-3">
          <span>2022/6</span>
          <p>用时: 25:40:46</p>
        </div>
      </div>
    </div>

  </card>
</template>
<script>
import card from './Card.vue'
import ShowMore from './showMore.vue'
export default {
  name: 'DefaultName',
  components: {
    card,
    ShowMore,
  },
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
.total-year {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .total-year-time {
    color: rgb(27, 27, 29);
    font-family: Gill Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  .top-three {
    margin-top: 25px;
    width: 100%;
    height: 140px;
    background-image: url('../assets/ranking/month.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .rank-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
      position: absolute;
      &.rank-content-1 {
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
      }
      &.rank-content-2 {
        bottom: 7%;
        left: 3%;
      }
      &.rank-content-3 {
        bottom: 6%;
        right: 2%;
      }
      span {
        font-size: 20px;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
      }
    }
    .rank-imag-1 {
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 80px;
    }
    .rank-imag-2 {
      position: absolute;
      top: 4%;
      left: 7%;
      width: 70px;
      height: 80px;
    }
    .rank-imag-3 {
      position: absolute;
      top: 5%;
      right: 6%;
      width: 70px;
      height: 80px;
    }
  }
}
</style>