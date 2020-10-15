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
@import '@/styles';

.image {
  border-radius: $radius;
  overflow: hidden;
}
</style>
