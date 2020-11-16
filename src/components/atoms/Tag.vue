<template>
  <span class="tag" :class="color" :style="{ backgroundColor: color }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tag',
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

  &.empty {
    background-color: transparent;
    border: 1px solid #eee;
  }

  @each $name, $color in $colors {
    &.#{$name} {
      background-color: $color !important;
    }
  }
}
</style>
