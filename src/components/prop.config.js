import dayjs from "dayjs";
export const monthChartsOption = {
  // tooltip: {
  //   trigger: 'axis',
  //   axisPointer: {
  //     type: 'shadow'
  //   }
  // },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: false
      },
      data: ['8/9', '8/10', '8/11', '8/12', '8/13', '8/14'],
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      // axisLabel: {
      //   formatter: function (value) {
      //     return dayjs(value).format('mm:DD');
      //   }
      // }
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '40%',
      color: '#05BFAB',
      itemStyle: {
        // 柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
        normal: {
          // 柱形图圆角，初始化效果
          barBorderRadius: [15, 15, 15, 15]
        }
      },
      data: [166, 292, 253, 345, 234, 145]
    }
  ]
};