<template>
  <div class="box" :class="classNames">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { BoxProps } from '@/types';

export default defineComponent({
  name: 'Box',
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
  },
  setup(props: BoxProps) {
    const classNames = computed(() =>
      Object.entries(props).map(prefixWithCol => prefixWithCol.join('-')),
    );
    return { classNames };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.box {
  @each $prefix, $px in $widths {
    @media screen and (min-width: $px) {
      @for $col from 1 through $max-col {
        &.#{prefix}-#{$col} {
          width: percentage($col / $max-col * 100);
        }
      }
    }
  }
}
</style>
