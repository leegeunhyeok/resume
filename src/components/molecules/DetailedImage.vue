<template>
  <div class="detailed-image">
    <Image class="detailed-image__img" :source="source" />
    <div class="detailed-image__detail" v-if="detail">
      <h2>{{ detail.title }}</h2>
      <p>{{ detail.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.detailed-image {
  position: relative;
  border-radius: $radius;
  overflow: hidden;

  &__img {
    width: 100%;
    transition: transform 0.3s;
  }

  &:hover > &__img,
  &:active > &__img {
    transform: scale(1.05);
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
