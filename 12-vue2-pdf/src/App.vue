<template>
  <div id="app">
    <div id="my-wrapper">
      <h1>ここにPDF を表示します</h1>
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod
        praesentium tenetur perferendis non voluptatum autem asperiores ad
        aspernatur deleniti veritatis sint, vel impedit eum quae enim, provident
        excepturi iste.
      </p>

      <div><a href="pdf/my-sample1.pdf"> anchor version link 1 </a></div>
      <div><a href="pdf/my-sample2.pdf"> anchor version link 2 </a></div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod
        praesentium tenetur perferendis non voluptatum autem asperiores ad
        aspernatur deleniti veritatis sint, vel impedit eum quae enim, provident
        excepturi iste.
      </p> -->

      <div>
        objectを利用する場合
        <object
          data="pdf/my-sample2.pdf"
          type="application/pdf"
          width="100%"
          height="500px"
        >
          <p>
            <b>表示されない時の表示</b>:
            <a href="pdf/my-sample2.pdf">PDF をダウンロード</a>.
          </p>
        </object>
      </div>

      <!-- <div>
        embedを利用する場合
        <embed
          src="pdf/my-sample2.pdf"
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>

      <div>
        iframeを利用する場合
        <iframe src="pdf/my-sample2.pdf" width="100%" height="2000px">
          <p>
            <b>表示されない時の表示</b>:
            <a href="pdf/my-sample2.pdf">PDF をダウンロード</a>.
          </p>
        </iframe>
      </div> -->

      <!-- <div>ライブラリを利用する場合 pdf.js, pdf-viewer-vue など</div> -->

      <div class="my-footer">
        利用規約を確認するとボタンがアクティブになります。
        <button>利用規約を確認しました。</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
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

#my-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 4.0rem;
}

.my-footer {
  position: fixed;  
  width: 98%;  
  bottom: 0;
  background-color:yellowgreen;
  height: 50px;  
  padding-top: 10px;  
}

.my-footer2 {
  margin-top: auto;
  position: fixed;
  bottom: 0;
  height: 4.0rem;
  width: 100%;
  background-color:yellowgreen;
}
</style>
