<template>
  <button
    :class="className"
    :disabled="disabled"
    @click="$emit('click')"
    @touchstart.passive="() => null"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface ButtonProps {
  text: string;
  color?: string;
  size?: string;
  disabled?: boolean;
}

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: String,
    size: String,
    disabled: Boolean,
  },
  emits: ['click'],
  setup(props: ButtonProps) {
    const className = computed(() => [props.color, props.size]);
    return { className };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

button {
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: $radius;
  transition: opacity 0.2s;
  font-family: inherit;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: darken($gray, 0.2);

    &:hover {
      opacity: 1;
    }
  }

  // size
  &.small {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
  &,
  &.medium {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
  &.large {
    font-size: 1.4rem;
    padding: 0.6rem 1rem;
  }

  // color
  &.glass {
    color: #fff;
    background: rgba($gray, 0.5);
    backdrop-filter: $blur;
  }
}
</style>
