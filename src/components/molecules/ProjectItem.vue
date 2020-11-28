<template>
  <div
    class="project-item"
    :class="data.url && 'has-url'"
    @touchstart.passive="() => null"
    @click="more"
  >
    <Image class="project-item__img" :source="assetFrom(data.image)" />
    <div class="project-item__detail" :class="'text-' + textColor" :style="{ color: textColor }">
      <h2>{{ data.name }}</h2>
      <p>{{ data.description }}</p>
    </div>
    <div class="project-item__label" v-show="data.star !== -1 || projectYear">
      <div class="project-item__label__star" v-if="data.star !== -1">
        {{ data.star }}
      </div>
      <span v-show="data.star !== -1 && projectYear">|</span>
      <div class="project-item__label__year" v-if="projectYear">
        {{ projectYear }}
      </div>
    </div>
    <div class="project-item__tag">
      <Tag
        v-for="(color, i) in data.tagColor"
        :color="color"
        :key="i"
        :style="{ zIndex: data.tag.length - i }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { assetFrom, openPage } from '@/common/util';
import { ProjectData } from '@/types';

import Tag from '@/components/atoms/Tag.vue';
import Image from '@/components/atoms/Image.vue';

export default defineComponent({
  name: 'ProjectItem',
  components: { Image, Tag },
  props: {
    data: {
      type: Object as PropType<ProjectData & { tagColor: string[] }>,
      required: true,
    },
  },
  setup(props) {
    const star = ref(-1);
    const textColor = computed(() => props.data.textColor || null);
    const projectYear = new Date(props.data.date).getFullYear() || 0;

    return {
      star,
      textColor,
      projectYear,
      more: () => props.data.url && openPage(props.data.url),
      assetFrom,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

$overlap: 7px;

@mixin over-label {
  position: absolute;
  top: 0.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: $radius / 2;
  z-index: 1;
  padding: 0 4px;
}

.project-item {
  position: relative;
  border-radius: $radius;
  overflow: hidden;
  clip-path: content-box;
  position: relative;
  margin-bottom: 1rem;

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

  &__label {
    @include over-label;
    padding: 5px;
    left: 0.5rem;
    color: #fff;

    & > div {
      display: inline-block;
    }

    &__star {
      background-image: url('~@/assets/star.svg');
      background-size: 1.5rem;
      background-position: 0px;
      background-repeat: no-repeat;
      padding-left: 24px;
    }

    & > span {
      margin: 0 5px;
      opacity: 0.3;
    }
  }

  &__tag {
    @include over-label;
    right: 0.5rem;
    padding-left: $overlap * 1.5;

    & > * {
      position: relative;
      margin-left: -$overlap;
      margin-top: $overlap / 2;
    }
  }
}
</style>
