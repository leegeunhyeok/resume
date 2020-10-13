<template>
  <button :class="className" @click="$emit('click')" :disabled="disabled">{{ text }}</button>
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
  &.red {
    color: #fff;
    background: $red;
    background: linear-gradient(180deg, lighten($red, 0.2), $red);
  }
  &.green {
    color: #fff;
    background: $green;
    background: linear-gradient(180deg, lighten($green, 0.2), $green);
  }
  &.blue {
    color: #fff;
    background: $blue;
    background: linear-gradient(180deg, lighten($blue, 0.2), $blue);
  }
  &.glass {
    color: #fff;
    background: rgba($gray, 0.5);
    backdrop-filter: $blur;
  }
}
</style>
