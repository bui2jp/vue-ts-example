<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
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
export default class App extends Vue {
  mounted(){
    console.log("mounted.")

    console.log(tihs.getNowYMDHMS_California(new Date().getTime()));
  }

  // サンフランシスコの現在の日付と時間を返す関数
  // daylight saving time を考慮した時間を返す
  // サマータイムのときはPDT、そうでないときはPST
  getNowYMDHMS_SanFrancisco(utcTime) {
    var dt = new Date(utcTime);
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var hh = ("00" + dt.getHours()).slice(-2);
    var mm = ("00" + dt.getMinutes()).slice(-2);
    var ss = ("00" + dt.getSeconds()).slice(-2);
    var offset = dt.getTimezoneOffset() / 60;
    var hh2 = ("00" + (dt.getHours() - offset)).slice(-2);
    var isSummerTime = this.isSummerTime(utcTime);
    var timeZone = isSummerTime ? "PDT" : "PST";
    return y + "-" + m + "-" + d + " " + hh2 + ":" + mm + ":" + ss + " " + timeZone;
  }


  //isSummerTime
  /**
 * This function determines if the given time is in summer time or not.
 * @param utcTime UTC time
 * @return true if the given time is in summer time, false otherwise.
 */

public isSummerTime(utcTime:any):boolean {
    var dt:Date = new Date(utcTime);
    var y:number = dt.getFullYear();
    var m:string = ("00" + (dt.getMonth()+1)).slice(-2);
    var d:string = ("00" + dt.getDate()).slice(-2);
    var hh:string = ("00" + dt.getHours()).slice(-2);
    var mm:string = ("00" + dt.getMinutes()).slice(-2);
    var ss:string = ("00" + dt.getSeconds()).slice(-2);
    var offset:number = dt.getTimezoneOffset() / 60;
    var hh2:string = ("00" + (dt.getHours() - offset)).slice(-2);
    var dt2:Date = new Date(y + "-" + m + "-" + d + " " + hh2 + ":" + mm + ":" + ss);
    var dt3:Date = new Date(y + "-03-01 00:00:00");
    var dt4:Date = new Date(y + "-11-01 00:00:00");
    var isSummerTime:boolean = dt3 <= dt2 && dt2 < dt4;
    return isSummerTime;
  }


  // カリフォルニア州の今日の日付と時間を返す関数
  // 引数はUTC時間
  // daylight saving time を考慮した時間を返す
  getNowYMDHMS_California(utcTime) {
    var dt = new Date(utcTime);
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var hh = ("00" + dt.getHours()).slice(-2);
    var mm = ("00" + dt.getMinutes()).slice(-2);
    var ss = ("00" + dt.getSeconds()).slice(-2);
    var offset = dt.getTimezoneOffset() / 60;
    var hh2 = ("00" + (dt.getHours() - offset)).slice(-2);
    return y + "-" + m + "-" + d + " " + hh2 + ":" + mm + ":" + ss;
  }
  






  // 今日の日付と時間を返す関数
  getNowYMDHMS() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var hh = ("00" + dt.getHours()).slice(-2);
    var mm = ("00" + dt.getMinutes()).slice(-2);
    var ss = ("00" + dt.getSeconds()).slice(-2);
    return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
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
