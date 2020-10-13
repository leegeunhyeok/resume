<template>
  <div class="progress">
    <div class="progress__value" :style="{ width: value + '%' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress ',
  props: {
    value: Number,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$progress_height: 1rem * 0.5;

@include theme {
  .progress {
    position: relative;
    height: $progress_height;
    border-radius: $progress_height;
    background-color: t(primary);

    &__value {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: $progress_height;
      background-color: t(mask);
      transition: width 0.3s;
    }
  }
}
</style>
