<template>
  <p class="text" :class="className">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface TextProps {
  color?: string;
  size?: string;
}

export default defineComponent({
  name: 'Text',
  props: {
    color: String,
    size: String,
  },
  setup(props: TextProps) {
    const className = computed(() => ({
      ...(props.size && { [props.size]: true }),
      ...(props.color && { [props.color]: true }),
    }));
    return { className };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';

@include theme {
  $color: t('text');

  .text {
    margin: 0;

    &,
    &.medium {
      font-size: 1rem;
    }
    &.small {
      font-size: 0.8rem;
    }
    &.large {
      font-size: 1.2rem;
    }

    &.primary {
      color: $color;
    }

    &.secondary {
      color: rgba($color, 0.8);
    }
  }
}
</style>
