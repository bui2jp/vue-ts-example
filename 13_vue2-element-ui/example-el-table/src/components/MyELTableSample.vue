<template>
  <div>
    <!-- header -->
    <MyHeader id="myHeader"></MyHeader>

    <!-- contents -->
    <div id="myContents">
      <div id="mySubContents">
        <el-button class="MyBotton" @click="handlerButtonClicked()"
          >El-Button1</el-button
        >
        <el-button class="MyBotton" @click="handlerButtonClicked()"
          >El-Button2</el-button
        >
        <el-button class="MyBotton" @click="handlerButtonClicked()"
          >El-Button3</el-button
        >
      </div>
      <div id="mySubContents">
        <el-table
          :header-cell-style="{ background: 'blue' }"
          stripe
          :data="tableDataList"
          border
          style="width: 100%"
          height="500"
        >
          <el-table-column prop="date" label="Date" width="180" fixed>
          </el-table-column>
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
          <el-table-column prop="address" label="Address" width="180">
          </el-table-column>
          <el-table-column prop="remark" label="Remark" width="1500">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- footer -->
    <MyFooter id="myFooter"></MyFooter>
  </div>
</template>
  
  <script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";

type MyData = {
  date: string;
  name: string;
  address?: string;
  remark?: string;
};

@Component({
  components: {
    MyHeader,
    MyFooter,
  },
})
export default class HelloWorld extends Vue {
  @Prop() msg!: string;

  tableDataList: MyData[] = [];
  mounted() {
    console.log("start mounted()");
    //create test data
    this.tableDataList = [];

    for (let i = 0; i < 20; i++) {
      const nowString = new Date();
      const d1: MyData = {
        date: nowString.toDateString(),
        name: "bbb" + i,
        address: "address" + i,
        remark:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      };
      console.log(d1);
      this.tableDataList.push(d1);
    }
  }
  handlerButtonClicked() {
    console.log("click button...");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myContents {
  background-color: brown;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100%;
}

#mySubContents{
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
  