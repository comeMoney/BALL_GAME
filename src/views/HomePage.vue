<template>
  <div class='home-page-wrapper'>
    <avator></avator>
    <TotalDataYear />
    <TotalDataMonth />
    <div class="clock-in" @click="toClick">立即打卡</div>
  </div>
</template>
<script>
import avator from '../components/Avator.vue'
import TotalDataYear from '../components/TotalDataYear.vue'
import TotalDataMonth from '../components/TotalDataMonth.vue'
export default {
  name: 'homepage',
  components: {
    avator,
    TotalDataYear,
    TotalDataMonth,
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    toClick(){
      this.$router.push({
        path: '/clock'
      })
    }
  },
}
</script>
<style lang='less' scoped>
.home-page-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(221, 249, 247, 1);
  .clock-in {
    width: 90%;
    position: fixed;
    bottom: 30px;
    left: 2.5%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(5, 191, 171);
    border-radius: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
}
</style>