<template>
  <div class="hello">
    <div>
      <ul style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">
        <li v-for="(n) in 100" :key="n"><div style="background-color:blue; height:100px; width:100px">{{n}}</div></li>
      </ul>
    </div>

    <div>
    <h1>{{ msg }}</h1>
    <!-- <el-carousel :interval="3000" type="always" height="500px"> -->
    <el-carousel :interval="3000" type="card" height="500px" autoplay="false">      
    <el-carousel-item v-for="item in 6" :key="item">
      <div style="background-color: red; height: 500px;">
        aaa
      </div>
    </el-carousel-item>
    </el-carousel>    
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
