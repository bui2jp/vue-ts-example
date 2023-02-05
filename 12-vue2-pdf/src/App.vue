<template>
  <div id="app">
    <h1> ここにPDF を表示します</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod praesentium tenetur perferendis non voluptatum autem asperiores ad aspernatur deleniti veritatis sint, vel impedit eum quae enim, provident excepturi iste.</p>

    <div> <a href="my-sample1.pdf"> download link 1 </a> </div>
    <div> <a href="my-sample2.pdf"> download link 2 </a> </div>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod praesentium tenetur perferendis non voluptatum autem asperiores ad aspernatur deleniti veritatis sint, vel impedit eum quae enim, provident excepturi iste.</p>
    
    <button>利用規約を確認しました。</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
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
