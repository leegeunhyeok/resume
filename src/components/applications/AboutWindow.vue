<template>
  <Window @close="$emit('close')">
    <template v-slot:default>
      <div class="about__profile">
        <div class="about__profile__photo">
          <img :src="template.photo" />
        </div>
        <div class="about__profile__name">
          <Text :content="template.name" size="large" bold />
        </div>
        <div class="about__profile__intro">
          <Text :content="template.introduce" thin />
        </div>
        <div class="about__profile__skill">
          <Text content="Skills" size="large" />
          <Item
            v-for="(skill, i) in template.skill"
            :content="skill.label"
            :color="skill.color"
            :key="i"
          />
        </div>
      </div>
    </template>
  </Window>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BaseTemplate } from '@/types';

import Text from '@/components/atoms/Text.vue';
import Item from '@/components/molecules/Item.vue';
import Window from '@/components/organisms/Window.vue';

export default defineComponent({
  name: 'AboutWindow',
  components: { Window, Text, Item },
  props: {
    template: Object as PropType<BaseTemplate>,
  },
  emits: ['close'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/common';

@mixin move-up($delay) {
  opacity: 0;
  animation: fade-up 1s $delay forwards;
}

@include theme {
  .about {
    &__profile {
      padding-top: 4rem;
      @include move-up(0s);

      &__photo {
        width: 70%;
        max-width: 300px;
        margin: auto;
        border-radius: 50%;
        border: 2px solid t(border);
        overflow: hidden;
        background-color: t(pure);

        & > img {
          width: 100%;
        }
      }

      &__name {
        @include move-up(0.2s);

        & > p {
          margin: 1rem 0;
          text-align: center;
        }
      }

      &__intro {
        @include move-up(0.4s);

        & > p {
          margin-bottom: 1rem;
          margin-top: 0.5rem;
          text-align: center;
        }
      }

      &__skill {
        @include move-up(0.6s);
        width: 100%;
        max-width: 500px;
        margin: 3rem auto;
        text-align: center;

        & > div {
          display: inline-flex;
        }
      }
    }
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 100;
    transform: translateY(0);
  }
}
</style>
