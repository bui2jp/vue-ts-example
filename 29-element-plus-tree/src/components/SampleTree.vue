<!-- こちらは Option API -->
<script lang="ts">
import { defineComponent } from "vue";

interface Tree {
  label: string;
  children?: Tree[];
}

// Option API
export default defineComponent({
  data() {
    const data: Tree[] = [];
    const defaultProps = {
      children: "children",
      label: "label",
    };
    return {
      count: 0,
      data,
      defaultProps,
    };
  },
  mounted() {
    //dataを初期化
    this.data = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
                children: [
                  {
                    label: "Level three 1-1-1-1",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];
  },
  props: {
    msg: String,
    children: { type: String, default: "children" },
    label: { type: String, default: "label" },
  },
  methods: {
    handleNodeClick(data: Tree) {
      console.log(data);
    },
    clickme() {
      console.log("click me!");
    },
  },
});
</script>
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="primary" @click="count++"
      >(これはel-button) count is {{ count }}</el-button
    >
  </div>

  <el-tree
    style="max-width: 600px"
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
    show-checkbox
    :default-checked-keys="[0]"
    :default-expand-all="true"
  />

  <el-button @click="clickme()">click me!</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
