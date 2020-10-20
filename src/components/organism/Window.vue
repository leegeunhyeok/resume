<template>
  <div class="window">
    <div class="window__header">
      <div class="window__header__actions">
        <span class="red" @click="$emit('close')" />
        <span class="yellow" />
        <span class="green" />
      </div>
      <div class="window__header__title" :class="$slots.side || 'no-side'">
        <div class="padding" />
        <Text :content="title" size="large" />
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
import Text from '@/components/atom/Text.vue';

export default defineComponent({
  name: 'Window',
  components: { Text },
  props: {
    title: String,
  },
  emits: ['close'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$header_height: 4rem;
$header_icon_size: 1rem;

$side-sm-width: 200px;
$side-md-width: 250px;
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
    position: fixed !important;
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

      &__title {
        line-height: $header_height;

        @include size(sm) {
          padding-left: calc(#{$side-sm-width} + #{$content-padding});
        }
        @include size(md) {
          padding-left: calc(#{$side-md-width} + #{$content-padding});
        }

        &.no-side {
          padding-left: 8rem !important;
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
        max-width: $side-sm-width;
      }
      @include size(md) {
        max-width: $side-md-width;
      }
    }

    &__content {
      width: 100%;
      background-color: t(primary);
      padding-left: $content-padding;
      padding-right: $content-padding;
      @include window-content;
    }
  }
}
</style>
