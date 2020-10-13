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

$header_height: 4rem;
$header_icon_size: 1rem;

@mixin window-center {
  top: 45%;
  left: 50%;
  max-width: 1000px;
  max-height: 650px;
  transform: translate(-50%, -50%);
}

@mixin window-content {
  height: 100%;
  padding-top: ($header_height + 0.5rem);
  float: left;
  overflow-y: auto;

  @include size(sm) {
    float: none;
  }
}

@include theme {
  .window {
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
    border-radius: $radius;
    height: calc(100% - #{$dock-height});
    width: 100%;
    z-index: elevation(low);
    overflow: hidden;

    @include size(sm) {
      display: flex;
      height: 60vh;
      width: 80%;
      @include window-center;
    }

    @include size(xl) {
      height: 60vh;
      width: 60%;
      @include window-center;
    }

    &__header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: $header_height;
      z-index: elevation(middle);

      &__actions {
        $padding: ($header_height + $header_icon_size) / 3;
        position: absolute;
        top: $padding;
        left: $padding;

        & > span {
          display: inline-block;
          width: $header_icon_size;
          height: $header_icon_size;
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
      background-color: rgba(t(primary), 0.75);
      backdrop-filter: blur($blur);
      padding-left: 1rem;
      padding-right: 1rem;
      max-height: 200px;
      @include window-content;
      @include size(sm) {
        max-height: none;
        max-width: 200px;
      }
      @include size(md) {
        max-width: 250px;
      }
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
