<template>
  <div class="image">
    <img :src="source" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
  props: {
    source: String,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.image {
  position: relative;
  border-radius: $radius;
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
  }
}
</style>
