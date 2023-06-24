<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t('message.hello', ['hello']) }}</p>
    <p>{{ $t('message.mymsg1') }}</p>
    <p>{{ $t('message.mymsg2') }}</p>
    <p>{{ $t('message.mymsg3') }}</p>            
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;
  mounted(){
    console.log('hello world mounted.')
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
