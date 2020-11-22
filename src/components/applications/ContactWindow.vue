<template>
  <Window @close="$emit('close')" :padding="false">
    <template v-slot:default>
      <div class="contact">
        <div class="contact__title">
          <Text content="Contact Me" size="large" bold />
        </div>
        <div class="contact__item">
          <span class="fa-icon email" />
          <Text :content="template.email" />
        </div>
        <div
          class="contact__item hoverable"
          v-for="(social, i) in template.social"
          :key="i"
          @click="openPage(social.url)"
          @touchstart.passive="() => null"
        >
          <span class="fa-icon" :class="social.icon" v-if="social.icon" />
          <Text :content="social.label || social.url" />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { openPage } from '@/common/util';
import { BaseTemplate } from '@/types';

import Text from '@/components/atoms/Text.vue';
import Window from '@/components/organisms/Window.vue';

export default defineComponent({
  name: 'ContactWindow',
  components: { Text, Window },
  props: {
    template: Object as PropType<BaseTemplate>,
  },
  emits: ['close'],
  setup: () => ({ openPage }),
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

.contact {
  @include page;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    position: relative;
    margin-bottom: 2.5rem;
    animation: breath 1s alternate infinite;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: $gray;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;

    &.hoverable {
      cursor: pointer;
      transition: transform 0.2s;

      &:hover,
      &:active {
        transform: scale(1.1);
      }
    }

    & > span {
      margin-right: 1rem;
    }

    & > p {
      display: inline-block;
    }
  }
}

@keyframes breath {
  100% {
    transform: scale(1.2);
  }
}
</style>
