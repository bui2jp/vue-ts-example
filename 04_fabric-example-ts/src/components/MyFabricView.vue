<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyFabricView extends Vue {
    @Prop() private title!: string
}
</script>

<style scoped>

</style>