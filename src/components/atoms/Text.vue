<template>
  <p class="text" :class="className">{{ content }}</p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface TextProps {
  content: string | number;
  color?: string;
  font?: string;
  size?: string;
  thin?: boolean;
  bold?: boolean;
}

export default defineComponent({
  name: 'Text',
  props: {
    content: {
      type: [String, Number],
      required: true,
    },
    color: String,
    size: String,
    font: String,
    thin: Boolean,
    bold: Boolean,
  },
  setup(props: TextProps) {
    const className = computed(() => [
      props.color,
      props.size,
      props.thin ? 'thin' : null,
      props.bold ? 'bold' : null,
      props.font || null,
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
    font-size: 1.2rem;
    color: t(mask);

    // size
    &.small {
      font-size: 0.8rem;
    }
    &.medium {
      font-size: 1.2rem;
    }
    &.large {
      font-size: 1.6rem;
    }

    // font
    &.normal {
      font-family: inherit;
    }
    &,
    &.round {
      font-family: 'NanumSquare', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    }

    // color
    &.primary {
      color: $color;
    }
    &.secondary {
      color: rgba($color, 0.6);
    }

    // weight
    &.thin {
      font-weight: 300;
    }
    &.bold {
      font-weight: 900;
    }
  }
}
</style>
