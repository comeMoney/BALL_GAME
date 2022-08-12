<template>
  <card title="月度运动时间">
    <show-more slot="button"></show-more>
    <div
      class="month-echarts"
      ref="monthCharts"
    ></div>
  </card>
</template>
<script>
import card from '../components/Card.vue'
import { monthChartsOption } from './prop.config'
import ShowMore from './showMore.vue'
export default {
  name: 'DefaultName',
  components: {
    card,
    ShowMore,
  },
  props: {},
  data() {
    return {
      monthCharts: null,
      monthChartsOption,
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.monthCharts = this.$echarts.init(this.$refs.monthCharts)
    this.monthCharts.setOption(this.monthChartsOption)
  },
  methods: {},
}
</script>
<style lang='less' scoped>
.month-echarts {
  height: 200px;
  width: 100%;
}
</style>
