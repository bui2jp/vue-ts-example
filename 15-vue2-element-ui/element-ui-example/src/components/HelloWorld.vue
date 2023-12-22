<template>
  <div>
    <h1>{{ msg }}</h1>

    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row>
      <el-slider></el-slider>
      <el-col offset="6" span="12">
        <el-slider
          range
          v-model="sliderValues"
          :min="1"
          :max="9"
          :marks="sliderMarks"
          :show-tooltip="false"
          :show-stop="false"
        ></el-slider>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col span="3"><div class="bg-purple-blue">blue</div></el-col>
      <el-col span="3"><div class="bg-purple-yellow">yellow</div></el-col>
      <el-col span="3"><div class="bg-purple-red">red</div></el-col>
    </el-row>
    <el-row>
      <el-col offset="2" span="1"
        ><el-input v-model="sliderValues4[0]"></el-input
      ></el-col>
      <el-col offset="3" span="1"
        ><el-input v-model="sliderValues4[1]"></el-input
      ></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col offset="6" span="12">
        <el-slider
          range
          v-model="sliderValues1"
          :min="1"
          :max="9"
          :marks="sliderMarks"
        ></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col offset="6" span="12">
        <el-slider
          range
          v-model="sliderValues2"
          :min="1"
          :max="9"
          :marks="sliderMarks"
        ></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col offset="6" span="12">
        <el-slider
          range
          v-model="sliderValues3"
          :min="1"
          :max="9"
          :marks="sliderMarks"
        ></el-slider>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div>
      <span>青</span>
      ~ (3)
    </div>
    <div>
      <span>黄</span>
      4 ~ (6)
    </div>
    <div>
      <span>赤</span>
      7 ~
    </div>
  </div>
</template>

<script lang="ts">
import { ElAlert } from "element-ui/types/alert";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  sliderValues: number[] = [3, 7];
  sliderValues1: number[] = [1, 3];
  sliderValues2: number[] = [4, 6];
  sliderValues3: number[] = [7, 9];
  sliderValues4: number[] = [3, 7];
  sliderMarks = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-slider__bar {
  background-color: #42b983 !important;
}

.bg-purple-red {
  background: #ff0000;
}
.bg-purple-yellow {
  background: #e5ff00;
}
.bg-purple-blue {
  background: #001eff;
}

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
