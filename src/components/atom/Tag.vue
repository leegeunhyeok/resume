<template>
  <span class="tag" :class="color" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
  props: {
    color: String,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.tag {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  @each $name, $color in $colors {
    &.#{$name} {
      background-color: $color;
    }
  }
}
</style>
