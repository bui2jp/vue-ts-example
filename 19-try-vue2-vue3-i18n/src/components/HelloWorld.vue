<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("message.hello") }}</p>
    <p>vue3 + class style(vue-property-decorator) でも vue-i18n は動く</p>
    <p>viteでも動くことを確認。</p>    
    <p>各ライブラリのバージョンにご注意。</p>
  </div>
</template>

<script lang="ts">
import { Options as Component, Prop, Vue } from 'vue-property-decorator';
import i18n from '../i18n'

@Component({})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  mounted(){
    console.log("hellow world mounted()")
    console.log("this.$t: ", this.$t("message.hello"));

    //ここでi18nを更新してみる
    const messages3 = {
        message: {
          hello: 'messages3で更新してみました。'
        }      
    }
    //
    console.log("hellow world mounted()で更新")
    i18n.global.setLocaleMessage('ja',messages3);
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
