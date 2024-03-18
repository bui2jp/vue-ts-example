<script setup lang="ts"></script>

<template>
  <h1>My Layout2</h1>
  <!-- <el-row class="row-bg">
    <el-col :span="6"><div class="grid-content bg-gray1" /> </el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row>
  <el-row class="row-bg" justify="center">
    <el-col :span="6"><div class="grid-content bg-gray1" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row>
  <el-row class="row-bg" justify="end">
    <el-col :span="6"><div class="grid-content bg-gray1" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="6"><div class="grid-content bg-gray1" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row>
  <el-row class="row-bg" justify="space-around">
    <el-col :span="6"><div class="grid-content bg-gray1" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row>
  <el-row class="row-bg" justify="space-evenly">
    <el-col :span="6"><div class="grid-content bg-gray1" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray2" /></el-col>
    <el-col :span="6"><div class="grid-content bg-gray3" /></el-col>
  </el-row> -->

  <div
    style="
      width: 400px;

      padding: 10px;
      border-radius: 5px;
    "
  >
    <el-row class="row-bg">
      <el-col :offset="1" :span="10"
        ><div class="grid-content">
          <el-text class="mx-1" truncated>document name 1</el-text>
        </div></el-col
      >
      <el-col :offset="1" :span="1"
        ><div class="grid-content"><el-checkbox></el-checkbox></div
      ></el-col>
    </el-row>

    <el-row class="row-bg">
      <el-col :offset="1" :span="1"
        ><div class="grid-content"><el-checkbox></el-checkbox></div
      ></el-col>
      <el-col :offset="1" :span="10"
        ><div class="grid-content">
          <el-text class="mx-1" truncated>document name 1</el-text>
        </div></el-col
      >
    </el-row>

    <el-row class="row-bg">
      <el-col :offset="1" :span="10"
        ><div class="grid-content">
          <el-text class="mx-1" truncated
            >document name 1 document document document</el-text
          >
        </div></el-col
      >
      <el-col :offset="1" :span="1"
        ><div class="grid-content"><el-checkbox></el-checkbox></div
      ></el-col>
    </el-row>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 1px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  min-height: 36px;
}

.bg-gray1 {
  background-color: #d3d3d3;
}
.bg-gray2 {
  background-color: #808080;
}
.bg-gray3 {
  background-color: #696969;
}
</style>
