<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MyPDFCreater } from "@/components/MyPDFCreater";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  onClick() {
    console.log("clicked!!!");
    const pdf = new MyPDFCreater();
    pdf.createPDF();
  }
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
