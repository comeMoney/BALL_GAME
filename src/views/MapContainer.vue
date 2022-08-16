<template>
  <div class="home_div">
    <div id="container"></div>
    <div class="clock-detail">

    </div>
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'Mapview',
  data() {
    return {
      clickOption: {
        startAddress: '',
        endAddress: '',
        startLnglat: [],
        endLnglat: [],
        startTime: '',
        endTime: '',
        timeInterval: '',
      },
    }
  },
  created() {
    console.log(new Date(), 'Date');
  },
  mounted() {
    console.log(this.$parent, 'parent');
    // MapLoader()
    this.initAMap()
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: 'c0099cdca68fefeaed57def749729b27', //设置您的key
        version: '2.0',
        plugins: [
          'AMap.ToolBar',
          'AMap.Scale',
          'AMap.Geolocation',
          'AMap.Geocoder',
        ],
        AMapUI: {
          version: '1.1',
          plugins: [],
        },
        Loca: {
          version: '2.0',
        },
      })
        .then((AMap) => {
          var map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 15,
          })
          AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
              zoom: 15,
              enableHighAccuracy: true, //是否使用高精度定位，默认:true
              timeout: 10000, //超过10秒后停止定位，默认：5s
              position: 'RB', //定位按钮的停靠位置
              offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
              zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
              showCircle: false,
              extensions: 'all',
            })
            var geocoder = new AMap.Geocoder({
              city: '010', //城市设为北京，默认：“全国”
              radius: 1000, //范围，默认：500
            })
            map.addControl(geolocation)
            geolocation.getCurrentPosition((status, result) => {
              console.log(result, 'result');
              if (status == 'complete') {
                const lnglat = [
                  String(result.position.lng),
                  String(result.position.lat),
                ]
                geocoder.getAddress(lnglat, (statuss, results) => {
                  if (statuss === 'complete' && results.regeocode) {
                    var address = results.regeocode.formattedAddress
                    console.log(address, 'address')
                  } else {
                    console.log('根据经纬度查询地址失败')
                  }
                })
              }
            })
          })
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>
<style scoped>
.home_div {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: relative;
}

#container {
  width: 100%;
  height: 250px;
  position: absolute;
  background: white !important;
}

.map_title {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: rgba(27, 25, 27, 0.884);
}

h3 {
  position: absolute;
  left: 10px;
  z-index: 2;
  color: white;
}
</style>