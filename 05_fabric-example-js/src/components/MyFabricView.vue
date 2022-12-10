<template>
  <div>
    <h2>{{ title }}</h2>
    <canvas id="c"></canvas>
  </div>
</template>

<script>
import { fabric } from "fabric";

export default {
  name: "fabricViewName",
  props: {
    title: String,
  },
  mounted: function () {
    console.log("start mounted...");
    var canvas = new fabric.Canvas("c");
    
    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
  },
};
</script>

<style>
</style>