<template>
  <div class="window">
    <div class="window__header" @mousedown="moveStart">
      <div class="window__header__actions">
        <span class="red" @click="$emit('close')" />
        <span class="yellow" />
        <span class="green" />
      </div>
    </div>
    <div class="window__side" v-if="$slots.side">
      <slot name="side" />
    </div>
    <div class="window__content" :class="$slots.side && 'has-side'">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Window',
  props: {
    title: String,
  },
  emits: ['close'],
  setup() {
    const moveStart = () => console.log('start');
    return { moveStart };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$header_height: 3rem;

@mixin window-content {
  height: 100%;
  padding-top: ($header_height * 1.2);
}

@include theme {
  .window {
    position: fixed;
    top: 45%;
    left: 50%;
    display: flex;
    position: relative;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
    border-radius: $radius;
    height: 50vh;
    width: 70%;
    max-width: 1000px;
    max-height: 650px;
    z-index: elevation(low);
    overflow: hidden;
    transform: translate(-50%, -50%);

    &__header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: $header_height;
      z-index: elevation(middle);

      &__actions {
        $padding: $header_height / 3;
        position: absolute;
        top: $padding;
        left: $padding;

        & > span {
          display: inline-block;
          width: $padding;
          height: $padding;
          border-radius: 50%;
          margin-right: 10px;

          &.red {
            cursor: pointer;
            background-color: $red;
            border: 1px solid darken($red, 5%);

            &:hover,
            &:active {
              opacity: 0.5;
            }
          }

          &.yellow {
            background-color: $yellow;
            border: 1px solid darken($yellow, 5%);
          }

          &.green {
            background-color: $green;
            border: 1px solid darken($green, 5%);
          }
        }
      }
    }

    &__side {
      width: 100%;
      max-width: 250px;
      background-color: rgba(t(primary), 0.75);
      backdrop-filter: blur($blur);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      @include window-content;
    }

    &__content {
      width: 100%;
      background-color: t(primary);
      padding-left: 1rem;
      padding-right: 1rem;
      @include window-content;
    }
  }
}
</style>
