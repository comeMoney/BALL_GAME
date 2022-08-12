<template>
  <div class="home_div">
    <div id="container"></div>
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import LabelsData, { GDPSpeed } from './config'
export default {
  name: 'Mapview',
  data() {
    return {
      map: null,
      AMap: null,
      colors: {},
      GDPSpeed,
      LabelsData,
    }
  },
  created() {},
  mounted() {
    this.initAMap()
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: 'c0099cdca68fefeaed57def749729b27', //设置您的key
        version: '2.0',
        plugins: ['AMap.ToolBar', 'AMap.Scale'],
        AMapUI: {
          version: '1.1',
          plugins: [],
        },
        Loca: {
          version: '2.0',
        },
      })
        .then((AMap) => {
          console.log(this, 'this')
          var disCountry = new AMap.DistrictLayer.Country({
            zIndex: 10,
            SOC: 'CHN',
            depth: 1,
            styles: {
              'nation-stroke': '#ff0000',
              'coastline-stroke': '#0088ff',
              'province-stroke': 'grey',
              fill: (props) => {
                return this.getColorByDGP(props.adcode_pro)
              },
            },
          })

          var map = new AMap.Map('container', {
            zooms: [4, 10],
            center: [106.122082, 33.719192],
            zoom: 5,
            isHotspot: false,
            defaultCursor: 'pointer',
            layers: [disCountry],
            viewMode: '3D',
          })
          map.addControl(new AMap.Scale())
          map.addControl(new AMap.ToolBar({ liteStyle: true }))
          map.on('complete', () => {
            var layer = new AMap.LabelsLayer({
              // 开启标注避让，默认为开启，v1.4.15 新增属性
              collision: false,
              // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
              animation: true,
            })
            for (var i = 0; i < this.LabelsData.length; i++) {
              var labelsMarker = new AMap.LabelMarker(this.LabelsData[i])
              layer.add(labelsMarker)
            }
            map.add(layer)
          })
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getColorByDGP(adcode) {
      if (!this.colors[adcode]) {
        var gdp = this.GDPSpeed[adcode]
        if (!gdp) {
          this.colors[adcode] = 'rgb(227,227,227)'
        } else {
          var r = 3
          var g = 140
          var b = 230
          var a = gdp / 10
          this.colors[adcode] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
        }
      }
      return this.colors[adcode]
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
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
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