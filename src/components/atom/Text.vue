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
  thin?: boolean;
  bold?: boolean;
}

export default defineComponent({
  name: 'Text',
  props: {
    color: String,
    size: String,
    thin: Boolean,
    bold: Boolean,
  },
  setup(props: TextProps) {
    const className = computed(() => [
      props.color,
      props.size,
      props.thin ? 'thin' : null,
      props.bold ? 'bold' : null,
    ]);
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
      font-size: 1.2rem;
    }
    &.small {
      font-size: 0.8rem;
    }
    &.large {
      font-size: 1.6rem;
    }

    &.primary {
      color: $color;
    }

    &.secondary {
      color: rgba($color, 0.8);
    }

    &.thin {
      font-weight: 300;
    }

    &.bold {
      font-weight: bold;
    }
  }
}
</style>
