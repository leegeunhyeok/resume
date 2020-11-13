<template>
  <div
    class="detailed-image"
    :class="url && 'has-url'"
    @touchstart.passive="() => null"
    @click="more"
  >
    <Image class="detailed-image__img" :source="source" />
    <div class="detailed-image__detail" v-if="detail">
      <h2>{{ detail.title }}</h2>
      <p>{{ detail.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { openPage } from '@/common/util';

import Image from '@/components/atoms/Image.vue';

interface ImageDetail {
  title?: string;
  description?: string;
}

export default defineComponent({
  name: 'DetailedImage',
  components: { Image },
  props: {
    source: String,
    detail: {
      type: Object as PropType<ImageDetail>,
    },
    url: String,
  },
  setup(props) {
    return { more: () => props.url && openPage(props.url) };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.detailed-image {
  position: relative;
  border-radius: $radius;
  overflow: hidden;
  clip-path: content-box;

  &:hover > &__img,
  &:active > &__img {
    transform: scale(1.05);
  }

  &.has-url {
    cursor: pointer;

    &::before {
      content: '(View More)';
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 1.8rem;
      font-weight: bold;
      z-index: 5;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover,
    &:active {
      &::before {
        opacity: 1;
      }
    }
  }

  &__img {
    width: 100%;
    transition: transform 0.3s;
  }

  &__detail {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;

    color: #fff;
    & > h2 {
      margin: 0;
    }

    & > p {
      margin: 0;
    }
  }
}
</style>
