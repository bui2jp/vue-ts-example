<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FabricView title="Fabric Test."/>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FabricView from './components/MyFabricView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FabricView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
