<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import EmptyLayout from './layout/empty'
import MainLayout from './layout/main'
export default {
  components:{
    EmptyLayout,
    MainLayout
  },
  computed :{
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  
}
</script>

<style>
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>
