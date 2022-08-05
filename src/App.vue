<template>
  <div
    id="app"
    :style="{height: height + 'px'}"
  >
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 740,
      transitionName: 'slide-left',
      routers: [],
    }
  },
  watch: {
    $route(to, from) {
      localStorage.setItem('fromName', from.name)
      if (to.name == this.routers[this.routers.length - 1]) {
        this.transitionName = 'slide-right'
        this.routers.pop()
      } else if (from.matched.length > 1 && to.matched.length > 1) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-left'
        this.routers.push(from.name)
      }
    },
  },
  mounted() {
    this.height = window.innerHeight
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less">
@import '@/css/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, HappyZcool-2016;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/backGround.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 300ms;
    // position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  input {
    -webkit-appearance: none;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
