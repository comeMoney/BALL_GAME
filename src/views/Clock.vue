<template>
  <div class='click-wrapper'>
    <map-container></map-container>
  </div>
</template>
<script>
import MapContainer from './MapContainer.vue'
export default {
  name: 'DefaultName',
  components: { MapContainer },
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
.click-wrapper {
  width: 100%;
  height: 100%;
}
</style>
