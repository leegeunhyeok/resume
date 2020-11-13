<template>
  <div class="window">
    <div class="window__header">
      <div class="window__header__actions">
        <span class="red" @click="$emit('close')" @touchstart.passive="() => null" />
        <span class="yellow" />
        <span class="green" />
      </div>
    </div>
    <div class="window__side" v-if="$slots.side">
      <slot name="side" />
    </div>
    <div
      class="window__content"
      :class="[$slots.side && 'has-side', padding ? null : 'no-padding']"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Window',
  emits: ['close'],
  props: {
    padding: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$header_height: 4rem;
$header_icon_size: 1rem;

$side-sm-width: 230px;
$content-padding: 1rem;

@mixin window-position {
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
    display: flex;
    flex-direction: column;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
    border-radius: 0;
    height: calc(100% - #{$dock-height});
    width: 100%;
    z-index: elevation(low);
    overflow: hidden;

    @include size(sm) {
      flex-direction: row;
      height: 60vh;
      width: 80%;
      border-radius: $radius;
      @include window-position;
    }

    @include size(xl) {
      height: 60vh;
      width: 60%;
      @include window-position;
    }

    &__header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: $header_height;
      z-index: elevation(middle);

      &__actions {
        $padding: ($header_height + $header_icon_size) / 3.5;
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
      max-height: 9rem;
      overflow-x: auto;
      overflow-y: hidden;
      @include window-content;
      @include size(sm) {
        max-height: none;
        max-width: $side-sm-width;
        overflow-y: auto !important;
      }
      white-space: nowrap;
    }

    &__content {
      @include window-content;
      width: 100%;
      height: 100%;
      background-color: t(primary);
      padding-left: $content-padding;
      padding-right: $content-padding;
      padding-top: 1rem;

      &.no-padding {
        padding: 0;
      }
    }
  }
}
</style>
