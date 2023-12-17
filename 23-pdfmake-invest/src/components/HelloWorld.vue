<script setup lang="ts">
import { ref } from "vue";

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

defineProps<{ msg: string }>();

const count = ref(0);

const tryPdfOut = () => {
  console.log("start tryPdf out ...");
  // const docDefinition = {
  //   content: [
  //     "First paragraph",
  //     "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
  //   ],
  // };
  // var pdfDoc = printer.createPdfKitDocument(docDefinition);
  // pdfDoc.pipe(fs.createWriteStream("pdfs/basics.pdf"));
  // pdfDoc.end();
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="tryPdfOut()">try pdf out</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
