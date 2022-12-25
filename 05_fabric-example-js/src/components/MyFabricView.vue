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
    let canvas = new fabric.Canvas("c", { width: 500, height: 500, backgroundColor: 'white' }, );
    canvas.isDrawingMode = true;

    canvas.on('mouse:down', function(options) {
      console.log(options.e.clientX, options.e.clientY);
    });

    canvas.on('mouse:move', function(options) {
      console.log(options.e.clientX, options.e.clientY);
    });
    
    canvas.on('mouse:up', function(options) {
      console.log(options.e.clientX, options.e.clientY);
    });
  }
};
</script>

<style>
#c{
     border:1px solid;
     position: absolute;
     top:22px;
     left:10px;
     height: 100%;
     width: 99%;
 }
</style>