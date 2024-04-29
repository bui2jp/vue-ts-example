<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const mychecked01 = ref(false);
const mychecked02 = ref(false);
const mychecked03 = ref(false);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>css + image</h2>  
  <div id="my-img-checkbox-area1">
    <input type="checkbox" name="mychecked01" v-model="mychecked01" />
    <label for="mychecked01">mychecked01</label>
  </div>
  <div id="my-img-checkbox-area2">
    <input type="checkbox" name="mychecked02" v-model="mychecked02" />
    <label for="mychecked02">mychecked026</label>
  </div>
  <div id="my-img-checkbox-area3">
    <input type="checkbox" name="mychecked03" v-model="mychecked03" />
    <label for="mychecked03">mychecked03</label>
  </div>


  <h2>css only</h2>
  <div id="my-check-box-area1">
    <input type="checkbox" name="mychecked01" v-model="mychecked01" />
    <label for="mychecked01">mychecked01</label>
  </div>
  <div id="my-check-box-area2">
    <input type="checkbox" name="mychecked02" v-model="mychecked02"></input>
    <span></span>
    <label for="mychecked02">mychecked02</label>
  </div>
  <div id="my-check-box-area3">
    <input type="checkbox" name="mychecked03" v-model="mychecked03" />
    <label for="mychecked036">mychecked03</label>
  </div>
</template>

<style scoped>
#my-check-box-area1 {
  /* リセット */
  input[type="checkbox"] {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* チェックボックスデザイン */
  input[type="checkbox"] {
    cursor: pointer;
    padding-left: 30px; /*label手前にチェックボックス用の余白を開ける*/
    vertical-align: middle;
    position: relative;
  }
  input[type="checkbox"]::before,
  input[type="checkbox"]::after {
    content: "";
    display: block;
    position: absolute;
  }

  /* 外側の枠 */
  input[type="checkbox"]::before {
    background-color: #fff;
    border-radius: 0%;
    border: 1px solid #666464;
    width: 20px; /*チェックボックスの横幅*/
    height: 20px; /*チェックボックスの縦幅*/
    transform: translateY(-50%);
    top: 50%;
    left: 5px;
  }

  /* チェックされたときのレ点をborderで表現 */
  input[type="checkbox"]::after {
    border-bottom: 3px solid #666464; /*チェックの太さ*/
    border-left: 3px solid #666464; /*チェックの太さ*/
    opacity: 0; /*チェック前は非表示*/
    height: 6px; /*チェックの高さ*/
    width: 11px; /*チェックの横幅*/
    transform: rotate(-45deg);
    top: -7px; /*チェック時の位置調整*/
    left: 10px; /*チェック時の位置調整*/
  }

  input[type="checkbox"]:checked::after {
    opacity: 1; /*チェック後表示*/
  }
}

#my-check-box-area2 {
  
  /* リセット */
  input[type="checkbox"] {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* チェックボックスデザイン */
  input[type="checkbox"] {
    cursor: pointer;
    padding-left: 30px; /*label手前にチェックボックス用の余白を開ける*/
    vertical-align: middle;
    position: relative;
  }
  input[type="checkbox"]::before,
  input[type="checkbox"]::after {
    content: "";
    display: block;
    position: absolute;
  }

  label::before {
    background-color: #fff;
    border-radius: 0%;
    border: 1px solid #666464;
    width: 20px; /*チェックボックスの横幅*/
    height: 20px; /*チェックボックスの縦幅*/
    transform: translateY(-50%);
    top: 50%;
    left: 5px;
  }

  input[type="checkbox"]::before {
    border-bottom: 3px solid #d9d3d3; /*チェックの太さ*/
    border-left: 3px solid #d9d3d3; /*チェックの太さ*/
    opacity: 1; /*チェック前は非表示*/
    height: 6px; /*チェックの高さ*/
    width: 11px; /*チェックの横幅*/
    transform: rotate(-45deg);
    top: -7px; /*チェック時の位置調整*/
    left: 10px; /*チェック時の位置調整*/
  }

  input[type="checkbox"]::after {
    border-bottom: 3px solid #3b3939; /*チェックの太さ*/
    border-left: 3px solid #3b3939; /*チェックの太さ*/
    opacity: 0; /*チェック前は非表示*/
    height: 6px; /*チェックの高さ*/
    width: 11px; /*チェックの横幅*/
    transform: rotate(-45deg);
    top: -7px; /*チェック時の位置調整*/
    left: 10px; /*チェック時の位置調整*/
  }

  input[type="checkbox"]:checked::after {
    opacity: 1; /*チェック後表示*/
  }
}

#my-check-box-area3 {
  /* リセット */
  input[type="checkbox"] {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* チェックボックスデザイン */
  input[type="checkbox"] {
    cursor: pointer;
    padding-left: 30px; /*label手前にチェックボックス用の余白を開ける*/
    vertical-align: middle;
    position: relative;
  }
  input[type="checkbox"]::before,
  input[type="checkbox"]::after {
    content: "";
    display: block;
    position: absolute;
  }
  input[type="checkbox"]::before {
    background-color: #fff;
    border-radius: 0%;
    border: 1px solid #666464;
    width: 20px; /*チェックボックスの横幅*/
    height: 20px; /*チェックボックスの縦幅*/
    transform: translateY(-50%);
    top: 50%;
    left: 5px;
  }
  input[type="checkbox"]::after {
    border-bottom: 3px solid #666464; /*チェックの太さ*/
    border-left: 3px solid #666464; /*チェックの太さ*/
    opacity: 0; /*チェック前は非表示*/
    height: 6px; /*チェックの高さ*/
    width: 11px; /*チェックの横幅*/
    transform: rotate(-45deg);
    top: -7px; /*チェック時の位置調整*/
    left: 10px; /*チェック時の位置調整*/
  }

  input[type="checkbox"]:checked::after {
    opacity: 1; /*チェック後表示*/
  }
}
.read-the-docs {
  color: #888;
}
</style>
